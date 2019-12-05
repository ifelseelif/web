import javax.faces.context.FacesContext;
import java.util.Map;

public class MainBean {
    public void validate() {
        FacesContext facesContext = FacesContext.getCurrentInstance();
        Map<String, String> params = facesContext.getExternalContext().getRequestParameterMap();
        PointBean point = new PointBean(Double.parseDouble(params.get("X-value")),
                Double.parseDouble(params.get("Y-value")), Double.parseDouble(params.get("R-value")));
        System.out.println(point);
    }


}

