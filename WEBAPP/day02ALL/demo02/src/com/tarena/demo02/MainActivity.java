package com.tarena.demo02;

import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;
import android.webkit.WebView;


public class MainActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		//alt + / ①智能提示 ②自动引入该类的import
		//创建一个WebView类型的变量wv
		WebView wv = 
		new WebView(getApplicationContext());
		//通过wv载入指定的网页
		wv.loadUrl(
		"file:///android_asset/demo01.html");
		//载入wv
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
