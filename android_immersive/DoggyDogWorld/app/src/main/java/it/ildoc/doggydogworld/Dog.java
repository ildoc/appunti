package it.ildoc.doggydogworld;

import android.util.Log;

/**
 * Created by filippo on 02/06/16.
 */
public class Dog {
    String name;
    int age;
    int numberOfLegs = 4;
    String breed;

    void bark() {
        String bark = name + " barked";
        Log.d("Dog", bark);
    }
}
