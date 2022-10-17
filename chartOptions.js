export function Test() {
    console.log('Testing...');
}

export function getBarOption(title, names, values, color) {
    return {
        title: {
            text: title
        },
        xAxis: {
            type: 'category',
            data: names,
            axisLabel: {
                rotate: "45"
            }
        },
        yAxis: {
            type: 'value'
        },
        aria: {
            enabled: true,
            decal: {
                show: true
            }
        },
        series: [{
            realtimeSort: true,
            data: values,
            type: 'bar',
            showBackground: true,
            itemStyle: {
                color: color
            },
            label: {
                show: true,
                formatter: "{c}",
            },
        }]
    }
}

export function getLineOption(title, names, values, color, zh) {
    var opts = {
        title: {
            text: title
        },
        legend: {},
        tooltip: {
            trigger: 'axis',
            formatter: function (params) {
                var res = params[0].name;
                for (var i = 0; i < params.length; i++) {
                    res += "<br>" + params[i].marker + params[i].seriesName + ": " + params[i].data + "%";
                }
                return res;
            }
        },
        aria: {
            enabled: true,
            decal: {
                show: true
            }
        },
        xAxis: {
            type: 'category',
            data: names,
            axisLabel: {
                rotate: "45"
            }
        },
        yAxis: {
            type: 'value'
        },
        series: []
    }

    for (let i in values) {
        opts.series.push(
            {
                name: zh[i],
                data: values[i],
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        label: {
                            show: true, formatter: "{c}" + "%",
                        }
                    }
                },
                areaStyle: {
                    color: color
                }
            }
        )
    }
    return opts
}

export function getDataOption(datas, name, value, zero = false) {
    var names = []
    var values = []
    for (let i in datas) {
        if (zero) {
            names.push(datas[i][name])
            if (datas[i][value] === null) {
                values.push(0)
            } else {
                values.push(datas[i][value])
            }
        }
        else {
            if (datas[i][value]) {
                names.push(datas[i][name])
                values.push(datas[i][value])
            }
        }

    }
    return [names, values]
}

export function getLineData(datas, name, value, zero = false) {
    var xlabel = []
    var values = {}

    if (zero) {
        // xlabel
        for (let i in datas) {
            xlabel.push(datas[i][name])
        }

        // values
        for (let i in value) {
            values[value[i]] = []
        }
        for (let i in value) {
            for (let j in datas) {
                if (datas[j][value[i]] == null) {
                    values[value[i]].push(0)
                } else {
                    values[value[i]].push(datas[j][value[i]])
                }
            }
        }
    } else {
        // xlabel
        for (let i in datas) {
            xlabel.push(datas[i][name])
        }

        // values
        for (let i in value) {
            values[value[i]] = []
        }
        for (let i in value) {
            for (let j in datas) {
                values[value[i]].push(datas[j][value[i]])
            }
        }
    }
    return [xlabel, values]
}

export function getLineData2(Data, xlabel, type, showData, zero = false) {
    var parseData = {}
    var dates = {}
    var datas = {}

    Data.forEach(item => {
        parseData[item[type]] = {}
        dates[item[xlabel]] = {}
        datas[item[type]] = []
    });

    var xlabels = Object.keys(dates)

    Data.forEach(item => {
        parseData[item[type]][item[xlabel]] = item[showData]
    });

    xlabels.forEach(item => {
        for (let i in parseData) {
            datas[i].push(parseData[i][item]);
        }
    })
    return [xlabels, datas]
}

export function getLineOption2(title, names, values, limit = []) {
    var opts = {
        title: {
            text: title
        },
        legend: {},
        tooltip: {
            trigger: 'axis',
            formatter: function (params) {
                var res = params[0].name;
                for (var i = 0; i < params.length; i++) {
                    res += "<br>" + params[i].marker + params[i].seriesName + ": " + params[i].data + "%";
                }
                return res;
            }
        },
        aria: {
            enabled: true,
            decal: {
                show: true
            }
        },
        xAxis: {
            type: 'category',
            data: names,
            axisLabel: {
                rotate: "45"
            }
        },
        yAxis: {
            min: limit[0],
            max: limit[1],
            type: 'value'
        },
        series: []
    }
    for (let i in values) {
        opts.series.push(
            {
                name: i,
                data: values[i],
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        label: {
                            show: true, formatter: "{c}" + "%",
                        }
                    }
                }
            }
        )
    }

    return opts
}
