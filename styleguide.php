<!-- THIS IS THE STYLEGUIDE PAGE.
Please refer to http://codepen.io/guide for reference and
adhere to these guidelines http://cssguidelin.es/-->

<!doctype html>
<html lang="en" class="no-js">
<head>
	<?php include('includes/sources.php'); ?>
</head>
<body>
	<!-- PRELOADER -->
	<?php include('includes/progress.php'); ?>
	
	<!-- POPUPS -->
	<?php /*include('includes/popups.php');*/ ?>

	<!-- HEADER -->
	<header>
		<?php include('includes/header.php'); ?>
	</header>

	<!-- MAIN WRAP -->
	<div class="main-wrap page-styleguide">

		<section class="sg-section">
			<h2 class="sg-title">Colors</h2>
			<div class="sg-sample">
				<h3>BRAND COLORS</h3>
				<div class="sg-pallete brand-01">
					$main-brand-color
				</div>
			</div>
		</section> <!-- sg-section end -->

		<section class="sg-section">
			<h3 class="sg-title">Typography</h3>
			<h1>Heading Level 1</h1>
			<h2>Heading Level 2</h2>
			<h3>Heading Level 3</h3>  
			<h4>Heading Level 4</h4>
			<h5>Heading Level 5</h5> 
			<h6>Sub</h6>

			<blockquote>"Primary blockquote font: [Montserrat, bold]"</blockquote>

			<p>A paragraph (<a href="javascript:void(0)">link here</a> from the Greek paragraphos, "to write beside" or "written beside") is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.</p>
		</section> <!-- sg-section end -->

		<section class="sg-section">
			<h3 class="sg-title">Grid</h3>
			<div class="sg-col_1-2"></div>
			<div class="sg-col_1-2"></div>
			<div class="sg-col_1-3"></div>
			<div class="sg-col_1-3"></div>
			<div class="sg-col_1-3"></div>
		</section><!-- sg-section end -->


		<section class="sg-section">
			<h3 class="sg-title">Buttons</h3>
			<a href="javascript:void(0)" class="btn-share">+ Share</a>
			<a href="javascript:void(0)" class="btn-blue">More</a>
			<a href="javascript:void(0)" class="btn-red">More</a>
		</section><!-- sg-section end -->


		<!-- quote -->


		<!-- CONTENT -->	
		<!-- <footer> -->
			<?php include('includes/footer.php');?>
		<!-- </footer> -->
 
	</div>
	<?php include('includes/js.php'); ?>

</body>
</html>