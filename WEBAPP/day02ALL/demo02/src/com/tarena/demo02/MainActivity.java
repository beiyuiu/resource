package com.tarena.demo02;

import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;
import android.webkit.WebView;


public class MainActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		//alt + / ��������ʾ ���Զ���������import
		//����һ��WebView���͵ı���wv
		WebView wv = 
		new WebView(getApplicationContext());
		//ͨ��wv����ָ������ҳ
		wv.loadUrl(
		"file:///android_asset/demo01.html");
		//����wv
		setContentView(wv);
//		setContentView(R.layout.activity_main);
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}

}
