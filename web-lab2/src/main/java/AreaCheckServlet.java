import bean.Result;
import bean.ResultBean;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AreaCheckServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        double x = Double.parseDouble(req.getParameter("x"));
        double y = Double.parseDouble(req.getParameter("y"));
        double r = Double.parseDouble(req.getParameter("r"));
        ResultBean holder = (ResultBean) getServletContext().getAttribute("Results");
        if (checkResult(x, y, r)) {
            holder.addArea(new Result(x, y, r, "yes"));
        } else {
            holder.addArea(new Result(x, y, r, "no"));
        }
        req.getRequestDispatcher("result.jsp").include(req,resp);
    }


    private boolean checkResult(double x, double y, double r) {
        if ((x <= 0 && x >= -r && y >= -r && y <= 0)) {
            return true;
        }

        if (x >= 0 && y <= 0 && ((x * x + y * y) <= r * r)) {
            return true;
        }

        if (x >= 0 && y >= 0 && (y < r / 2 - x)) {
            return true;
        }
        if (x > 2 || x < -2 || y < -3 || y > 3 || r < 1 || r > 3) {
            return false;
        }
        return false;
    }
}
