package com.tarena.demo03;

import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;
import android.webkit.ConsoleMessage;
import android.webkit.WebChromeClient;
import android.webkit.WebView;

public class MainActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		//实例化
		WebView wv = new WebView(getApplicationContext());
		//载入指定的网页
		wv.loadUrl("file:///android_asset/demo02.html");
		//设置wv，允许执行js
		wv.getSettings()
		.setJavaScriptEnabled(true);
		
		//允许在logCat中查看
		//js通过console所输出的日志信息
		wv.setWebChromeClient(new WebChromeClient(){
			@Override
			public boolean onConsoleMessage(ConsoleMessage consoleMessage) {
				// TODO Auto-generated method stub
				return super.onConsoleMessage(consoleMessage);
			}
		});
		
		//设置内容视图
		setContentView(wv);
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}

}
