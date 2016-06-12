package it.ildoc.taskit;

import java.util.Date;

/**
 * Created by filippo on 07/06/16.
 */
public class Task {
    private String name;
    private Date dueDate;
    private boolean done;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDueDate() {
        return dueDate;
    }

    public void setDueDate(Date dueDate) {
        this.dueDate = dueDate;
    }

    public boolean isDone() {
        return done;
    }

    public void setDone(boolean done) {
        this.done = done;
    }

    public String toString(){
        return name;
    }
}
