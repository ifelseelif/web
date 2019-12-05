import javax.servlet.*;
import java.io.IOException;


public class CheckFilter  implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        if(request.getAttribute("from")== null) {
            request.getRequestDispatcher("index.jsp").forward(request,response);

        }
        chain.doFilter(request,response);
    }

    @Override
    public void destroy() {

    }
}
