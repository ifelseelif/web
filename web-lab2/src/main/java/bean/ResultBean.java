package bean;

import java.io.Serializable;
import java.util.ArrayList;

public class ResultBean implements Serializable {
    private ArrayList<Result> holder;

    public ResultBean() {
        holder = new ArrayList<Result>();
    }

    public void addArea(Result areaHolder) {
        holder.add(areaHolder);
    }

    public StringBuilder getHolder() {
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append(makeHead());

        for (int i = 0; i < holder.size(); i++) {
            stringBuilder.append("<tr>");
            stringBuilder.append(holder.get(i).toString());
            stringBuilder.append("</tr>");
        }
        return stringBuilder;
    }

    private String makeHead() {
        return "<tr>" +
                "<td>x</td>" +
                "<td>y</td>" +
                "<td>R</td>" +
                "<td>Result</td>" +
                "</tr>";
    }

    public void setHolder(ArrayList<Result> holder) {
        this.holder = holder;
    }

    public StringBuilder drawPoints() {
        StringBuilder stringBuilder = new StringBuilder();
        for(int i = 0; i< holder.size();i++){
            stringBuilder.append(holder.get(i).drawPoint());
        }
        return stringBuilder;
    }
}
