$(function () {
    $('[data-toggle="tooltip"]').tooltip();

    var emailCapture = $("#emailCapture");
    var continueLink = $(".questionnaire .capture-container a");

    if ($("body").hasClass('landing-page-sticky') || $("body").hasClass('questionnaire') || $("body").hasClass('competition')) {
        $("body > nav").remove();
    }

    $(window).on('scroll', function() {
        if (!$("body").hasClass('fixed-nav')) {
            if ($(this).scrollTop() > 350) {
                $("body > .navbar").show('slide', {direction: 'up'});
            } else {
                $("body > .navbar").hide('slide', {direction: 'up'});
            }
        }

        $('.parallax').each(function () {
            if ($(window).innerWidth()> 525) {
                var offset = $(window).scrollTop();

                if ($(this).hasClass('rocket')) {
                    offset = $(window).scrollTop() - $(document).height() + $(window).height();
                }

                var yPosition = -(offset / $(this).data('speed'));

                $(this).css({backgroundPosition: '50% ' + yPosition + 'px'});
            }
        });

        if($(".dropdown").hasClass("open")) {
            if ($(this).scrollTop() >= 25) {
                $(".dropdown").removeClass("open");
            }
        }

        if($(".dropdown-menu").hasClass("on")) {
            if ($(this).scrollTop() >= 25) {
                $(".dropdown-menu").removeClass("on");
            }
        }
    });

    $( "#accordion" ).accordion({
        collapsible: true,
        heightStyle: 'content',
        active: false
    });

    $('#vertical').selectize({
        create: false,
        sortField: 'text'
    });

    $.validator.addMethod( "phoneUK", function( phone_number, element ) {
        phone_number = phone_number.replace( /\(|\)|\s+|-/g, "" );
        return this.optional( element ) || phone_number.length > 9 &&
            phone_number.match( /^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/ );
    }, "Please enter a valid phone number" );

    $(".questionnaire #formEmailCapture").validate();

    $('form[name="10k-digital-boost-competition-lead"]').validate({
        rules: {
            '10k-digital-boost-competition-lead[name]': {
                required: true,
                minlength: 2
            },
            '10k-digital-boost-competition-lead[email]': {
                required: true,
                email: true
            },
            '10k-digital-boost-competition-lead[phone]': {
                required: true
            }
        },
        messages: {
            '10k-digital-boost-competition-lead[name]': {
                required: "Enter your full name",
                minlength: "Enter your full name"
            },
            '10k-digital-boost-competition-lead[email]': {
                required: "Enter your email address",
                email: "Please enter a valid email address"
            },
            '10k-digital-boost-competition-lead[phone]': {
                required: "Enter your phone number"
            }
        }
    });

    $('form[name="10k-digital-boost-competition-form"]').validate({
        rules: {
            '10k-digital-boost-competition-form[about]': {
                required: true,
                minlength: 2
            },
            '10k-digital-boost-competition-form[prize]': {
                required: true,
                minlength: 2
            },
            '10k-digital-boost-competition-form[webaddress]': {
                required: true,
                minlength: 8
            },
        },
        messages: {
            '10k-digital-boost-competition-form[about]': {
                required: "Enter your business description",
                minlength: "Enter your business description"
            },
            '10k-digital-boost-competition-form[prize]': {
                required: "Tell us what this prize would mean to your business",
                minlength: "Tell us what this prize would mean to your business"
            },
            '10k-digital-boost-competition-form[webaddress]': {
                required: "Please enter your webaddress",
                minlength: "Please enter a valid web address"
            }
        }
    });

    $('form[name="support-contact-form"]').submit(function(e) {
        e.preventDefault();

        var supportSubmit = $("#support-contact-form_submit");
        supportSubmit.prop("disabled", true);

        setTimeout(function() {
            supportSubmit.prop("disabled", false);
        }, 5000);
    });

    $("input[name='10k-digital-boost-competition-form[website]']").change(function(){
        if($(this).val()=="no") {
            $(this).closest('.input-steps').next().hide();
        } else {
            $(this).closest('.input-steps').next().show();
        }
    });

    $('.nav-link-solutions').on('click', function() {
        $('.dropdowncontent, .caret').toggleClass('on');
    });

    $('.dropdown-solutions').on('click', function(e) {
        $('.dropdown-menu, .dd-solutions').toggleClass('on');
    });

    $('.autoplay').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1800,
        arrows: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 2600,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    variableWidth: true
                }
            }
        ]
    });

    $('.landing-pages').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1800,
        arrows: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.gallery').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1800,
        arrows: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true
                    // variableWidth: true
                }
            }
        ]
    });

    $('.fb-share').click(function(e) {
        e.preventDefault();
        window.open($(this).attr('href'), 'fbShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
        return false;
    });

    $('.tw-share').click(function(e) {
        e.preventDefault();
        window.open($(this).attr('href'), 'twShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
        return false;
    });

    $('.btn-enter-contest').on("click", function(e){
        e.preventDefault();
        $('body').scrollTop();
        $('form:first input[type=text]:first').focus();
    });

    $( '.questionnaire select, .questionnaire .btn-group' ).on( "change", function() {

        $(this).closest('.question').addClass('complete');
        $(this).closest('.question').removeClass('active');

        $('.question:not(.complete)').first().addClass('active');

        if($('.question.complete').length >= 5) {
            emailCapture.prop("disabled", false);
            emailCapture.focus();
        }
    });

    $('.questionnaire .btn-edit a, .questionnaire .progress').on("click", function() {
        $('.question').removeClass('active');
        $(this).closest('.question').addClass('active');
    });

    $(".questionnaire #formEmailCapture").on("submit", function(e){
        e.preventDefault();

        if($('.question.complete').length < 5) {
            $('html, body').scrollTop(0);
        }

        var data = {
            'vertical': $("#vertical").val(),
            'target_aov': $("#targetAov").find('input:radio:checked').val(),
            'lead_volume_goal': $("#leadVolumeGoal").find('input:radio:checked').val(),
            'location_targeting': $("#locationTargeting").find('input:radio:checked').val(),
            'experience_level': $("#experienceLevel").find('input:radio:checked').val(),
            'email': emailCapture.val()
        };

        $.ajax({
            type: "POST",
            url: 'crm_leads.php',
            data: data,
            beforeSend: function () {
                $('#formEmailCapture input[type=submit]').prop('value', 'Please Wait...');
                $('#formEmailCapture input[type=submit]').prop('disabled', true);
            },
            success: function(data){
                $(".questionnaire .capture-container form").remove();
                continueLink.attr('href', continueLink.attr('href') + 'email=' + emailCapture.val() + '&crm_lead_id=' + data);
                $(".questionnaire .capture-container .btn").removeClass("hidden-xs-down hidden-xs-up");
            },
            error: function() {
                $(".questionnaire .capture-container .row:last-child *[class^='col-']").html('<h2>Whoops!</h2><h3>Oops! Something went wrong. Please Try again.</h3>');
            }
        });

    });

    var sliderValDaily;
    var sliderValWeekly;
    var sliderValTotal;
    var sliderValFees;
    var sliderValTrafficCost;

    var budgetSlider    = $("#budget-slider");
    var budgetHandle    = $("#budget-slider-handle");
    var budgetLabelLow  = $(".budget-slider-low");
    var budgetLabelHigh = $(".budget-slider-high");

    var currencySymbol  = getCurrencySymbol();

    budgetSlider.slider({ value: 10, min: 5, max: 50, step: 1,
        create: function () {
            updateBudgetHandleVal($(this).slider("value"));
            updateCurrencySymbol();
        },
        slide: function (event, ui) {
            updateBudgetHandleVal(ui.value);
            updateBudgetHandlePosition(ui.value);
            calculateBudgetVals(ui.value);
        }
    });

    function getCurrencySymbol() {
        return $('#budget').text().slice(0,1);
    }

    function updateCurrencySymbol() {
        budgetLabelLow.text(currencySymbol + budgetLabelLow.text());
        budgetLabelHigh.text(currencySymbol + budgetLabelHigh.text());
    }

    function updateBudgetHandlePosition(value) {
        budgetHandle.css('margin-left', -1 * budgetHandle.width() * (value / budgetSlider.slider('option', 'max')));
    }

    function updateBudgetHandleVal(value) {
        budgetHandle.text(currencySymbol + value);
    }

    function calculateBudgetVals(value) {
        sliderValDaily       = +(value);
        sliderValWeekly      = Math.max((sliderValDaily) * 7);
        sliderValTotal       = sliderValWeekly / 133.3;
        sliderValFees        = Math.max((sliderValTotal) * 33.3333333333333);
        sliderValTrafficCost = sliderValWeekly - sliderValFees;

        $("#budget").text( currencySymbol + sliderValWeekly.toFixed(2) );
        $("#fee").text( currencySymbol + sliderValFees.toFixed(2) );
        $("#traffic-cost").text( currencySymbol + sliderValTrafficCost.toFixed(2) );
        $("#weekly-cost").text( currencySymbol + sliderValWeekly.toFixed(2) );
    }

});
