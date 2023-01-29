<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>BSA Developer Test</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimal-ui">
        <link rel="stylesheet" href="dist/css/index.css">
    </head>
    <body>
        <?php include_once('template-parts/navigation.php'); ?>

        <main class="main-content">
            <?php include_once('template-parts/hero.php'); ?>
            <?php include_once('template-parts/openings.php'); ?>
            <?php include_once('template-parts/culture.php'); ?>
            <?php include_once('template-parts/about.php'); ?>
            <?php include_once('template-parts/testimonials.php'); ?>
        </main>

        <?php include_once('template-parts/footer.php'); ?>
        <script type="text/javascript" src="dist/js/index.js" defer></script>
        <script id="__bs_script__">
        //<![CDATA[
          document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.27.11'><\/script>".replace("HOST", location.hostname));
        //]]>
        </script>
    </body>
</html>
