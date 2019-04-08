# bypass trial store 14 day password lock.


shopify pwd hack

1. create a new shopify store
2. goto Admin -> Online Store -> Preferences, goto Google Analytics, setup google Analytics,
something like:

```javascript
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-74034256-1', 'auto');
  ga('send', 'pageview');

</script>
```

3. After you setup google analytics there is an option [aditional Google Analytics Javascript]
4. you need to close the script tag like the following:

```javascript
setTimeout(function(){ 
$('#LoginModal #Password').val('shopifypass');
$('#LoginModal .input-group__btn button[name=commit]').click();
 }, 0);
```

5. Send your store link to your friends now!

