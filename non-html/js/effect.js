var effect =    function(what,which,when) {
                    window.setTimeout(function() {
                        $(what).addClass('animated');
                        $(what).addClass(which);
                        $(what).removeClass('hidden-effect');
                    }, when);
                };