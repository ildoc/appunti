package it.ildoc.taskit;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

public class TaskActivity extends AppCompatActivity {

    public static final String EXTRA = "EXTRA";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_task);

        Task task = (Task)getIntent().getSerializableExtra(EXTRA);
    }
}
