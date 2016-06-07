package it.ildoc.speakeasy;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Speaker thing = new Speaker() {
            @Override
            public String Speak() {
                return "I'm anonymous";
            }
        };

        Speaker[] speakers = {new Human(), new Dog(), new Cat()};
        SaySomething(speakers);
    }


    private void SaySomething(Speaker[] speakers) {
        for (Speaker speaker : speakers){
            Log.d("MainActivity", speaker.Speak());
        }
    }
}
