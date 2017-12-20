<!doctype html>
<html lang="en">
	<head>
		<?php include('includes/sources.php'); ?>
	</head>
	<body>
		<!-- PRELOADER -->
		<?php include('includes/progress.php'); ?>
		
		<!-- POPUPS -->
		<!-- <div class="popup-mask js-close"></div>
		
		<div class="popup-container">
			<div class="close js-close"></div>
			
			INSERT POPUP HTML HERE
			
			<div class="popup-wrap">
				<div class="popup popup-content" id="popdev-target">
					CUSTOM HTML FROM DEV HERE
				</div>
		
				<div class="popup popup-custom" id="custom">
					<h1>I AM A POPUP</h1>
		
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae nam consequatur reiciendis omnis esse, nesciunt!</p>
		
					<a href="javascript:void(0)" class="btn-main js-close">Close Me</a>
			
				</div>
		
				<div class="popup popup-custom" id="custom02">
					<h1>I AM A POPUP CUSTOM02</h1>
		
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae nam consequatur reiciendis omnis esse, nesciunt!</p>
		
					<a href="javascript:void(0)" class="btn-main js-close">Close Me</a>
			
				</div>
			</div>
		</div> -->
		
		
		<!-- HEADER -->
		<header>
			<?php include('includes/header.php'); ?>
		</header>

		<!-- MAIN WRAP -->
		<div class="mainwrap">

			<!-- content -->
			<!-- <a href="javascript:void(0)" onclick="popOpen('custom')">Trigger popup</a> -->

			<div class="banner">
				<div class="banner__copy">
					<h1>Yo!</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur culpa quisquam, minima veritatis dicta.</p>
				</div>
			</div>

			<div class="about">
				<div class="about__image">
					<div class="img-wrap">
						<img src="dist/images/fat_nin.png" alt="">
					</div>
				</div>
				<div class="about__copy">
					<h2>Trust me </br> I'm a Ninja.</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, sequi, ducimus. Exercitationem sit voluptatibus provident unde totam deleniti nulla minus voluptates aperiam laboriosam in quia assumenda quod, quis voluptas perferendis!</p>
				</div>
			</div>
			<div class="skillset">
				<h4>Ninjutsu</h4>
				<div class="skill">
					<div class="skill__icon">
						<img src="dist/images/html_icon.png" alt="">
					</div>
					<div class="skill__copy">
						<h4>html</h4>
					</div>
				</div>
				<div class="skill">
					<div class="skill__icon">
						<img src="dist/images/html_icon.png" alt="">
					</div>
					<div class="skill__copy">
						<h4>html</h4>
					</div>
				</div>
				<div class="skill">
					<div class="skill__icon">
						<img src="dist/images/html_icon.png" alt="">
					</div>
					<div class="skill__copy">
						<h4>html</h4>
					</div>
				</div>
			</div>
			<div class="projects">
				<h4>Missions</h4>
				<div class="project">
					<div class="project__image">
						<img src="dist/images/ninin.jpg" alt="">
					</div>
					<div class="project__copy">
						<h5>Lorem ipsum dolor sit amet.</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat natus quas, optio, nemo nostrum quisquam sint expedita laboriosam sequi dicta! Rerum eius, soluta, beatae alias saepe tenetur odit fugiat quibusdam.</p>
					</div>
				</div>
				<div class="project">
					<div class="project__image">
						<img src="dist/images/ninin.jpg" alt="">
					</div>
					<div class="project__copy">
						<h5>Lorem ipsum dolor sit amet.</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat natus quas, optio, nemo nostrum quisquam sint expedita laboriosam sequi dicta! Rerum eius, soluta, beatae alias saepe tenetur odit fugiat quibusdam.</p>
					</div>
				</div>
				
			</div>

			<!-- FOOTER you can move this outside the mainwrap-->
			<footer>
				<?php include('includes/footer.php'); ?>
			</footer>
		</div> <!-- end mainwrap -->

		<!-- JAVASCRIPT -->
		<?php include('includes/js.php'); ?>

	</body>
</html>

