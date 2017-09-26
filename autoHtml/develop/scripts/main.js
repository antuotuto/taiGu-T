    function Line() {
        this.MaxLine = 550;
        this.MinLine = 210;
        this.m = {
            x: 210,
            y: 320
        }
        this.l = {
            x: 210,
            y: 320
        }
        this.num = 7; //横向速度
        this.rSpeed = 0.05; //圆环速度
        this.yx = 100; //y跨度
        this.r = 100; //banjing
        this.beginCur = 1.5; //圆环启始位置
        this.closeCur = 1.5; //圆环位置
        this.rFang = false;
        this.once = 0;
        this._init();
        // line._init();
    }
    Line.prototype._init = function () {
        var _this = this;
        _this.cas = $("#canvas")[0];
        _this.ctx = this.cas.getContext('2d');
        _this.cas.width = window.innerWidth;
        _this.cas.height = window.innerHeight;
        _this.ctx.strokeStyle = "#90d0df";
        _this.ctx.lineWidth = 50;
        _this.ctx.lineCap = 'round';
        _this.ctx.lineJoin = 'round';
        _this.rafLine();
    }
    Line.prototype.rafLine = function () {
        var _this = this;
        _this.l.x += _this.num;
        _this.ctx.beginPath();
        _this.ctx.moveTo(_this.m.x, _this.m.y); //设置起点
        _this.ctx.lineTo(_this.l.x, _this.l.y); //画线
        _this.ctx.closePath();
        _this.ctx.stroke();
        requestAnimationFrame(function () {
            if (_this.l.x < _this.MaxLine && _this.l.x > _this.MinLine) {
                _this.rafLine();
            } else {
                _this.once += 1;
                if (_this.once > 3) {
                    cancelAnimationFrame(_this.rafLine);
                    cancelAnimationFrame(_this.rafCur);
                    return;
                }
                cancelAnimationFrame(_this.rafLine);
                if (_this.rSpeed < 0) {
                    _this.rFang = true;
                } else {
                    _this.rFang = false;
                }
                _this.rafCur();
            }
        });
    }
    Line.prototype.rafCur = function () {
        var _this = this;
        _this.closeCur += _this.rSpeed;
        _this.ctx.beginPath();
        _this.ctx.arc(_this.l.x, _this.l.y + _this.yx, _this.r, 1.5 * Math.PI, _this.closeCur * Math.PI, _this.rFang);
        _this.ctx.stroke();
        requestAnimationFrame(function () {
            if (_this.closeCur < 2.5 && _this.closeCur > 0.5) {
                _this.rafCur();
            } else {
                cancelAnimationFrame(_this.rafCur);
                _this.rSpeed *= -1;
                _this.closeCur = 1.5;
                _this.m.y = _this.l.y += 200;
                _this.m.x = _this.l.x;
                _this.num *= -1;
                _this.rafLine();
            }
        });
    }

var line = new Line();

var Swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: false,
    mousewheelControl: true,
    speed: 400,
    direction: 'vertical',
    initialSlide: 0,
    onInit: function (swiper) {
        $('.slide-index .animated').addClass('active')
    },
    onSlideChangeEnd: function (swiper) {
        if (swiper.activeIndex == 0) {
            $('.slide-forth .animated').removeClass('active')
            $('.slide-second .animated').removeClass('active')
            $('.slide-index .animated').addClass('active')
        }
        if (swiper.activeIndex == 1) {
            $('.slide-index .animated').removeClass('active')
            $('.slide-third .animated').removeClass('active')
            $('.slide-second .animated').addClass('active')
        }
        if (swiper.activeIndex == 2) {
            $('.slide-second .animated').removeClass('active')
            $('.slide-forth .animated').removeClass('active')
            $('.slide-third .animated').addClass('active')
        }
        if (swiper.activeIndex == 3) {
            $('.slide-third .animated').removeClass('active')
            $('.slide-fifth .animated').removeClass('active')
            $('.slide-forth .animated').addClass('active')
        }
        if (swiper.activeIndex == 4) {
            $('.slide-index .animated').removeClass('active')
            $('.slide-forth .animated').removeClass('active')
            $('.slide-fifth .animated').addClass('active')
        }
    }
});