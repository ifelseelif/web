package bean;

import java.io.Serializable;
import java.util.Objects;

public class Result implements Serializable {
    private double x;
    private double y;
    private double R;
    private String result;

    public Result() {
    }

    public Result(double x, double y, double r, String result) {
        this.x = x;
        this.y = y;
        R = r;
        this.result = result;
    }

    public Result(double x, double y, double r, boolean b) {
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
        return R;
    }

    public void setR(double r) {
        R = r;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    @Override
    public String toString() {
        return "<td>" + x + "</td>" +
                "<td>" + y + "</td>" +
                "<td>" + R + "</td>" +
                "<td>" + result + "</td>";
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Result that = (Result) o;

        if (x != that.x) return false;
        if (y != that.y) return false;
        if (R != that.R) return false;
        return Objects.equals(result, that.result);
    }

    @Override
    public int hashCode() {
        int result1;
        long temp;
        temp = Double.doubleToLongBits(x);
        result1 = (int) (temp ^ (temp >>> 32));
        temp = Double.doubleToLongBits(y);
        result1 = 31 * result1 + (int) (temp ^ (temp >>> 32));
        temp = Double.doubleToLongBits(R);
        result1 = 31 * result1 + (int) (temp ^ (temp >>> 32));
        result1 = 31 * result1 + (result != null ? result.hashCode() : 0);
        return result1;
    }


    public String drawPoint() {
        String strR = String.format("%.1f", R).replace(",", ".");
        String strX = String.format("%.4f", x / R).replace(",", ".");
        String strY = String.format("%.4f", y / R).replace(",", ".");
        return String.format("drawPoint(%s,%s,%s,\'%s\');", strR, strX, strY, "#00FF00");
    }
}
