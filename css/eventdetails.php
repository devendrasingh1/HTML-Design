<section class="banner_panel_outer">
	<div class="wedding_banner_img">
		<img src="<?php echo base_url(); ?>/front/images/events/wedding_banner_img.jpg">
	</div>

<style>
	.print_button_wrap .print_btns
	{
		top:55px;
	}
</style>
<div class="print_button_wrap">  	
	<a href="javascript:void(0);" class="btn btn-default print_btns" onclick="printInfo(this)" >Print</a>
	<a href="javascript:void(0);" class="btn btn-default print_btns" data-toggle="modal" data-target="#myModal">
    Email</a>
</div>    
  <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Email Address</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <form action="#" role="form">
        <!-- Modal body -->
        <div class="modal-body">
			<div class="form-group col-md-6">
				<input type="email" required class="form-control" id="emailid" placeholder="Enter Your Email Address.."/>
			</div>
        </div>
        <!-- Modal footer -->
        <div class="modal-footer">
		<a href="javascript:void(0);" class="btn btn-default" onclick="printemailfunct()">Forward</a> 
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
		<span id="successfail"></span>
        </form>
      </div>
    </div>
  </div>
</section>
<!-- wedding cermony Start -->
<div id="printpage">
<section class="wedding_cermony_panel">
    <div class="container">
    	<div class="section_heading">
    		<h2><?= isset($page[0]->title) ? $titlename = $page[0]->title : ''?></h2>
    	</div>
    	<div class="row">
	        <div class="col-md-6">
	        	<div class="wedding_img">
	        		 <img src="<?=isset($page[0]->photo)?base_url('upload/page/').$page[0]->photo:base_url('images/default.png')?>">
	        		<div class="wedding_img_text">
	        			<h5><?= isset($page[0]->title) ? $page[0]->title : ''?></h5>
	        		</div>
	        	</div>
	        </div>
	        <div class="col-md-6">
	            <div class="ceremonytext_box">
	            	<p>
						<?= isset($page[0]->description) ? $page[0]->description : ''?>
	            	</p>
	            </div>
	        </div>
        </div>
    </div>
</section>
<!-- wedding cermony end -->
<!-- wedding event Start -->
<section class="wedding_event_panel">
    <div class="container">
    	<div class="section_heading">
    		<h2>Parties & Events</h2>
    	</div>
    	<!-- old event row -->	
    	<div class="row">
		<?php foreach($subevents as $subevent){ ?>
	        <div class="col-md-6 col-sm-6 col-xs-12 event_box_col">
	        	<div class="f_event_box">
	        		<div class="event_img_left">
	        		<?php if(empty($subevent['image'])){ ?>	
	    					<img src="<?php echo base_url(); ?>/front/images/events/wed_1.jpg" class="img-responsive">
							<?php } else { ?>
							<img src="<?php echo base_url(); ?>/front/images/subevents/<?php echo $subevent['image'] ?>" class="img-responsive">
							<?php } ?>
	        		</div>
	        		<div class="event_txt_right">
	        			<div class="evnt_title">
	        				<h4><?= isset($subevent['title']) ? $subevent['title'] : ''; ?></h4>
	        			</div>
	        			<p><?= $subevent['description']; ?></p>
	        			<a href="<?php echo site_url('Page/subeventdetail') ?>/<?php echo $subevent['pageid'] ?>" class="read_m_btn">Read More</a>
	        		</div>
	        	</div>
	        </div>
		<?php } ?>
			</div>
		
	        <!--<a href="<?php echo site_url("Page/viewsubeventdetail") ?>" class="btn btn-info">Manage</a>-->
			<!--<div class="col-md-6 col-sm-6 col-xs-12 event_box_col">
	        	<div class="f_event_box">
	        		<div class="event_img_left">
	        			<img src="<?php echo base_url(); ?>/front/images/events/wed_2.jpg" class="img-responsive">
	        		</div>
	        		<div class="event_txt_right">
	        			<div class="evnt_title">
	        				<h4>Cake</h4>
	        			</div>
	        			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
	        			<a href="#" class="read_m_btn">read more</a>
	        		</div>
	        	</div>
	        </div>
	        <div class="col-md-6 col-sm-6 col-xs-12 event_box_col">
	        	<div class="f_event_box">
	        		<div class="event_img_left">
	        			<img src="<?php echo base_url(); ?>/front/images/events/wed_3.jpg" class="img-responsive">
	        		</div>
	        		<div class="event_txt_right">
	        			<div class="evnt_title">
	        				<h4>music</h4>
	        			</div>
	        			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
	        			<a href="#" class="read_m_btn">read more</a>
	        		</div>
	        	</div>
	        </div>
	        <div class="col-md-6 col-sm-6 col-xs-12 event_box_col">
	        	<div class="f_event_box">
	        		<div class="event_img_left">
	        			<img src="<?php echo base_url(); ?>/front/images/events/wed_4.jpg" class="img-responsive">
	        		</div>
	        		<div class="event_txt_right">
	        			<div class="evnt_title">
	        				<h4>Groom party</h4>
	        			</div>
	        			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
	        			<a href="#" class="read_m_btn">read more</a>
	        		</div>
	        	</div>
	        </div>-->
        
        <!-- old event row -->
    </div>
</section>
<!-- wedding event end -->
<!-- video section start -->
</div>
<section class="wedding_event_panel">
    <div class="container">
<div class="manage_dv">
			<a href="<?php echo site_url("Page/viewsubeventdetail") ?>?pageid=<?php echo $pageid; ?>" class="read_m_btn">Manage</a>
		</div>
		</div>
</section>		
<!-- print page div id -->
<section class="fn_video_section" style="background-image: url(<?php echo base_url(); ?>/front/images/events/video_bg.jpg);">
	<div class="overlay">
	</div>
	<div class="container">
		<div class="row">
			<div class="col-md-6 col-sm-12 col-xs-12">
				<div class="vdo_imgs">
					<img src="<?php echo base_url(); ?>/front/images/events/video_img.jpg" class="img-responsive">
				</div>
			</div>
			<div class="col-md-6 col-sm-12 col-xs-12">
				<div class="vdo_imgs">
					<img src="<?php echo base_url(); ?>/front/images/events/video_img2.jpg" class="img-responsive">
					<div class="video_overlay">
						<span class="video_p_icon" data-toggle="modal" data-target="#video_modal_p">
							<i class="fa fa-play"></i>
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- video section end -->
<!-- video popup -->
<div id="video_modal_p" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
        <div class="video_iframe">
        	<iframe src="https://www.youtube.com/embed/bewl66FTh64" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>

  </div>
 </div>
<!-- video popup -->

<script>
function printemailfunct()
{	
	var titlename = '<?php echo $titlename; ?>';		
	var emailid = $("#emailid").val();		
	var pageid = '<?php echo $pageid; ?>';
	

	$.ajax({
		type: 'POST',
		url: "<?php echo base_url('Page/sendemail'); ?>",
		data: {emailid:emailid,pageid:pageid,titlename:titlename},
		success: function(result)
		{
			//console.log(result);
			$("#successfail").html("<h5 style='background: #21d1b5;'> Successfully Send In Your Email Address </h5>");
		},
		error: function(result) 
		{
			//console.log(result);
			$("#successfail").html("<h5 style='background: #21d1b5;'> Mail Not Send </h5>");
		}
	});
}
</script>