(function name(params) {
    let num = document.querySelector(".num");
        function runNian(_year) {
            if (_year % 400 === 0 || (_year % 4 === 0 && _year % 100 !== 0)) {
                return true;
            }
            else { return false; }
        }
        //判断某年某月的1号是星期几
        function getFirstDay(_year, _month) {
            var allDay = 0, y = _year - 1, i = 1;
            allDay = y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + 1;
            for (; i < _month; i++) {
                switch (i) {
                    case 1: allDay += 31; break;
                    case 2:
                        if (runNian(_year)) { allDay += 29; }
                        else { allDay += 28; }
                        break;
                    case 3: allDay += 31; break;
                    case 4: allDay += 30; break;
                    case 5: allDay += 31; break;
                    case 6: allDay += 30; break;
                    case 7: allDay += 31; break;
                    case 8: allDay += 31; break;
                    case 9: allDay += 30; break;
                    case 10: allDay += 31; break;
                    case 11: allDay += 30; break;
                    case 12: allDay += 31; break;
                }
            }
            return allDay % 7;
        }
        //显示日历
        function showCalendar(_year, _month, _day, firstDay) {
            var i = 0,
                monthDay = 0,
                showStr = "",
                _classname = "",
                today = new Date();
            //月份的天数
            switch (_month) {
                case 1: monthDay = 31; break;
                case 2:
                    if (runNian(_year)) { monthDay = 29; }
                    else { monthDay = 28; }
                    break;
                case 3: monthDay = 31; break;
                case 4: monthDay = 30; break;
                case 5: monthDay = 31; break;
                case 6: monthDay = 30; break;
                case 7: monthDay = 31; break;
                case 8: monthDay = 31; break;
                case 9: monthDay = 30; break;
                case 10: monthDay = 31; break;
                case 11: monthDay = 30; break;
                case 12: monthDay = 31; break;
            }

            //输出日历表格，这部分因结构而异
            showStr = "<table class='cld-w'><thead>";
            //日历头部
            showStr += "<tr><th colspan='7'><div class='cld-hd'><span class='cld-pre'>&lt;</span><span id='showDate' value='" + _year + "-" + _month + "-" + _day + "'>" + _year + "年" + _month + "月" + (_day) + "日" + "</span><span class='cld-next'>&gt;</span></div></th></tr>";
            //日历星期
            showStr += "<tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr>";
            showStr += "</thead><tbody><tr>";
            //当月第一天前的空格
            for (i = 1; i <= firstDay; i++) {
                showStr += "<td></td>";
            }
            //显示当前月的天数
            for (i = 1; i <= monthDay; i++) {
                //当日的日期
                if (_year === today.getFullYear() && _month === today.getMonth() + 1 && i === today.getDate()) {
                    _classname = "cld-cur";
                }
                //当日之前的日期（这个判断是因为我有工作需求，就是要求之前的日期不能点击）
                else if (_year < today.getFullYear() || (_year === today.getFullYear() && _month <= today.getMonth()) || (_year === today.getFullYear() && _month === today.getMonth() + 1 && i < today.getDate())) {
                    _classname = "cld-old";
                }
                //其他普通的日期
                else { _classname = "cld-day"; }
                //其他大于当月的月份的相同日期（为了让点击下一月的时候，相同的日期增加cld-cur类）
                if (_day === i && (_year > today.getFullYear() || _month > today.getMonth() + 1)) { _classname = "cld-cur"; }
                //把日期存在对应的value       
                showStr += "<td class=" + _classname + " value='" + _year + "-" + _month + "-" + i + "'>" + i + "</td>";

                firstDay = (firstDay + 1) % 7;
                if (firstDay === 0 && i !== monthDay) {
                    showStr += "</tr><tr>";
                }
            }
            //剩余的空格
            if (firstDay !== 0) {
                for (i = firstDay; i < 7; i++) {
                    showStr += "<td></td>";
                }
            }
            showStr += "</tr></tbody></table>";
            //插入calendar的页面结构里
            calendar.innerHTML = showStr;
        }
        //显示年月日
        function showDate(_year, _month, _day) {
            var date = "", firstDay = getFirstDay(_year, _month, _day);
            if (_day !== 0) {
                date = _year + "年" + _month + "月" + _day + "日";
            }
            else { date = "No Choose."; }
            document.getElementById("showDate").innerHTML = date; //日历头部显示
            showCalendar(_year, _month, _day, firstDay);         //调用日历显示函数
        }
        //上一月
        function preMonth(_year, _month, _day) {
            if (_month == 1) { showDate(_year - 1, 12, _day); }
            else { showDate(_year, _month - 1, _day); }
        }
        //下一月
        function nextMonth(_year, _month, _day) {
            if (_month == 12) { showDate(_year + 1, 1, _day); }
            else { showDate(_year, _month + 1, _day); }
        }
        //初始化
        var calendar = document.createElement('div');
        calendar.setAttribute('id', 'showCld');
        num.appendChild(calendar); //增加到你的box里

        //获取当天的年月日    
        var today = new Date();
        var _year = today.getFullYear(),
            _month = today.getMonth() + 1,
            _day = today.getDate();
        var firstDay = getFirstDay(_year, _month);

        //显示日历
        showCalendar(_year, _month, _day, firstDay);
        //日历点击的事件委托（可以查查js冒泡的应用）
        calendar.onclick = function (e) {
            var e = e || window.event;
            var target = e.srcElement || e.target;
            //把日历的头部的年月日分割成数组，这里保存在其value属性上
            dayArr = document.getElementById('showDate').getAttribute('value').split('-');
            if (target) {
                //如果是可点击的日期
                if (target.className === "cld-day" || target.className === "cld-cur") {
                    dateArr = target.getAttribute('value').split('-');
                    //减0是把字符串转化成数值类型，以下一样            
                    showDate(dateArr[0] - 0, dateArr[1] - 0, dateArr[2] - 0);
                    calendar.className = "";
                }
                //如果是上一月的点击
                else if (target.className === "cld-pre") {
                    preMonth(dayArr[0] - 0, dayArr[1] - 0, dayArr[2] - 0);
                }
                //如果是下一月的点击
                else if (target.className === "cld-next") {
                    nextMonth(dayArr[0] - 0, dayArr[1] - 0, dayArr[2] - 0);
                }
            }
        };
})()