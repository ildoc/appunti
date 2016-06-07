package it.ildoc.signupform;

import java.io.Serializable;

/**
 * Created by filippo on 07/06/16.
 */
public class User implements Serializable{
    private String username;
    private String password;

    User(String username, String password)
    {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }
}
