import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ControllerServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        if(checkAttributes(req)) {
            req.getRequestDispatcher("index.jsp").forward(req, resp);
        }else{
            req.setAttribute("from",true);
            req.getRequestDispatcher("check").forward(req, resp);
        }
    }

    private boolean checkAttributes(HttpServletRequest req) {

        if(req.getParameter("x") != null &&
            req.getParameter("y") != null &&
                req.getParameter("r") != null){
            return false;
        }
        return true;
    }
}
