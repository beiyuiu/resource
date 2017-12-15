package com.tarena.demo04;

import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;
import android.webkit.WebView;

public class MainActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		//ʵ���� alt+/ 
		WebView myWv = new WebView(
				getApplicationContext());
		//����ִ��js
		myWv.getSettings()
			.setJavaScriptEnabled(true);
		//����ָ������ҳ
		myWv.loadUrl("http://172.163.100.49/framework/WebApp/day02/demo02.html");
		
		//��myWv��Ϊ������ͼ
		setContentView(myWv);
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}

}
