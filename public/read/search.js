
                    $('#imgSearch').click(function () {
                        Submit();
                    });

                    var delay = (function () {
                        var timer = 0;
                        return function (callback, ms) {
                            clearTimeout(timer);
                            timer = setTimeout(callback, ms);
                        };
                    })();

                    $('#keyword').keyup(function () {
                        delay(function () {
                            Suggest();
                        }, 500);
                    });

                    $('#selectSearch').change(function () {
                        Suggest();
                    });

                    $("#selectSearch option").each(function () {
                        var url = location.href;
                        if (url.indexOf($(this).attr('value')) != -1)
                            $(this).attr("selected", "selected");
                    });

                    function Submit() {
                        if ($.trim($('#keyword').val()).length < 2) {
                            $('#keyword').blur();
                            alert('Keyword must be more than one character!');
                        }
                        else {
                            $("#formSearch").attr('action', "https://kissmanga.com/Search/" + $('#selectSearch').val());
                            $("#formSearch").submit();
                        }
                    }

                    function Suggest() {
                        var keyword = $.trim($('#keyword').val());
                        if (keyword != "" && $.trim($('#keyword').val()).length > 2) {
                            $('#result_box').html("<span id='loader'></span>");
                            $('#result_box').css('display', 'block');
                            $.ajax(
                            {
                                type: "POST",
                                url: "/Search/SearchSuggest",
                                data: "type=" + $('#selectSearch').val() + '&keyword=' + keyword,
                                success: function (message) {
                                    if (message != "") {
                                        message += '<a href="#" onclick="return false;">---------------</a>';
                                        message += '<a href="#" onclick="return false;">PRESS ENTER TO SEARCH MORE...</a>';

                                        $('#result_box').html(message);
                                    }
                                    else {
                                        $('#result_box').html('<a href="#" onclick="return false;">Press Enter to search...</a>');
                                    }
                                }
                            });
                        }
                        else {
                            $('#result_box').html('');
                            $('#result_box').css('display', 'none');
                        }
                    }
                
