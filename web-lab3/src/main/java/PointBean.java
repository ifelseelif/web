import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;

//TODO Поменять видимость бина
@ManagedBean(name = "pointBean")
@ApplicationScoped
public class PointBean {
    private double x,y,r;
    private boolean status;

    public PointBean(){

    }

    public PointBean(double x, double y, double r){
        this.x = x;
        this.y = y;
        this.r = r;
        this.status = getStatus();
    }

    private boolean getStatus() {
        // TODO Сделать функцию проверки попадания по графику
        if(x>-3 && x<3 && y<3 && y>-3){
            return true;
        }
        return false;
    }


    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getR() {
        return r;
    }

    public void setR(double r) {
        this.r = r;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public void check(){

    }
}
