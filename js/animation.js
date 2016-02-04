
(function($) {
 
    var $formmsg = $('.bg #formmsg'),
    	$feedbackmsg = $('.bg #feedbackmsg');
    	tlProject;
    	
    	tlProject = new TimelineMax({repeat: -1, repeatDelay: 2});
    	
    	var $heading = $formmsg.find('.lead'),
    		$form = $formmsg.find('.form-contain');
    		
    	
    	//Main timeline
    	tlProject.fromTo($heading, 0.4, {autoAlpha: 0, yPercent = '-200' },{ yPercent ='0', ease:Power4.easeInOut });
 
})(jQuery);