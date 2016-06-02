package it.ildoc.doggydogworld;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Dog myDog = new Dog();
        myDog.name = "Doge";

        Dog yourDog = new Dog();
        yourDog.name = "Rex";

        myDog.bark();
    }
}
