package it.ildoc.signupform;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;

public class HomeActivity extends AppCompatActivity {
    public static final String EXTRA = "INFO";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        User user = (User)getIntent().getSerializableExtra(EXTRA);
        String welcome = String.format(getResources().getString(R.string.welcome_format), user.getUsername());
        TextView welcomeText = (TextView)findViewById(R.id.welcome_text);
        welcomeText.setText(welcome);
    }
}
