;(function ($, window, document, undefined) {

    var SpAdStyle = function (element) {
        
        this.element = element;
        this.$element = $(element);

    };

    SpAdStyle.prototype.overlay = function () {

        this.$element.css({

            "position": "fixed",
            "bottom": 0,
            "left": 0,
            "right": 0,
            "text-align": "center"

        });
        
        this.$element.find(".cb-adstyle").css("display", "inline");

        return this;

    };
    
    SpAdStyle.prototype.interstitial = function () {

        var that = this;
        var bg = $("<div>").css({

            "position": "absolute",
            "top": 0,
            "width": "100%",
            "height": "100%",
            "background-color": "rgba(0,0,0,.8)",
            "z-index": 999

        });

        var clear_btn = $("<button>").html("×").css({

            "width": "32px",
            "line-height": "24px",
            "background-color": "#fff",
            "border": "none",
            "cursor": "pointer",
            "border-radius": "2px",
            "font-size": "18px",
            "position": "absolute",
            "top": "8px",
            "right": "8px",
            "opacity": 1,
            "z-index": 1000

        });

        that.$element.append(bg);
        $(bg).append(clear_btn);
        
        that.$element.find(".cb-adstyle").css("display", "inline").css({

            "position": "absolute",
            "top": 0,
            "bottom": 0,
            "left": 0,
            "right": 0,
            "margin": "auto",
            "opacity": 1,
            "z-index": 1000

        });

        clear_btn.on("click", function () {

            that.$element.fadeOut(500).promise().then(function () {

                $(this).empty();

            });

        });

        return this;

    };
    
    SpAdStyle.prototype.responsive = function () {

        this.$element.find("img").css({
        
            "max-width": "100%",
            "height": "auto"

        });

        return this;

    };

    SpAdStyle.prototype.retina = function () {

        var img = this.$element.find("img");
        var w = img.width() / 2;
        var h = img.height() / 2;

        this.$element.find("img").css({

            "width": w + "px",
            "height": h + "px"

        });

        return this;

    };

    $.extend($.fn, {
    
        cbOverlay: function () {

            return this.each(function () {

                new SpAdStyle(this).overlay();

            });

        },

        cbInterstitial: function () {

            return this.each(function () {

                new SpAdStyle(this).interstitial();

            });

        },

        cbResponsive: function () {

            return this.each(function () {

                new SpAdStyle(this).responsive();

            });

        },

        cbRetina: function () {

            return this.each(function () {

                new SpAdStyle(this).retina();

            });

        }

    });

} (jQuery, window, document));