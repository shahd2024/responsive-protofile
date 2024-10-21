/// <reference types="../@types/jquery" />

 $(function(){
   $('.loader').fadeOut(2000,function(){
    $('.loading').slideUp(1000,function(){
        $('body').css('overflow','auto')
        $('.loading').remove();
      

       
        
    })
   })
 })
$(window).on('scroll',function(){
   let section=$('#about').offset().top;
   console.log(section);
    let len=$(window).scrollTop();
    console.log(len);
    if(len>section-$('.navbar').outerHeight(true)){
        $('.navbar').css('backgroundColor','white');
        $('.nav-link').css('cssText',`color: black !important `);
        $('.navbar-brand').css('cssText',`color: black !important `);
        $('.navbar').addClass('scrolled');
        console.log('done');
        
    }
    else{
        $('.navbar').css('backgroundColor','transparent')
        $('.nav-link').css('cssText',`color: white !important `)
        $('.navbar-brand').css('cssText',`color: white !important `)
        $('.navbar').removeClass('scrolled');
    }
    
    
})
