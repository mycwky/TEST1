    class ExportExcel {
        constructor() {
            this.idTmr = null;
            this.uri = 'data:application/vnd.ms-excel;base64,';
            this.template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" ' +
                'xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8">' +
                '<!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions>' +
                '<x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->' +
                ' <style type="text/css">' +
                'table td,table th {' +
                'width: 200px;' +
                'height: 50px;' +
                ' text-align: center;' +
                ' }' +
                '</style>' +
                '</head><body><table>{table}</table></body></html>';
        }
        getBrowser() {
            var explorer = window.navigator.userAgent;
            //ie
            if (explorer.indexOf("Trident") >= 0) {
                return 'ie';
            }
            //firefox
            else if (explorer.indexOf("Firefox") >= 0) {
                return 'Firefox';
            }
            //Chrome
            else if (explorer.indexOf("Chrome") >= 0) {
                return 'Chrome';
            }
            //Opera
            else if (explorer.indexOf("Opera") >= 0) {
                return 'Opera';
            }
            //Safari
            else if (explorer.indexOf("Safari") >= 0) {
                return 'Safari';
            }
        };
        exports(tableid,filename) {
            if (this.getBrowser() == 'ie') {
                var curTbl = document.getElementById(tableid);
                var oXL = new ActiveXObject("Excel.Application");
                var oWB = oXL.Workbooks.Add();
                var xlsheet = oWB.Worksheets(1);
                var sel = document.body.createTextRange();
                sel.moveToElementText(curTbl);
                sel.select();
                sel.execCommand("Copy");
                xlsheet.Paste();
                oXL.Visible = true;
                try {
                    var fname = oXL.Application.GetSaveAsFilename( filename + "Excel.xlsx", "Excel Spreadsheets (*.xlsx), *.xlsx");
                } catch (e) {
                    alert(e);
                } finally {
                    oWB.SaveAs(fname);
                    oWB.Close(savechanges = false);
                    oXL.Quit();
                    oXL = null;
                    this.idTmr = window.setInterval("Cleanup();", 1);
                }
            } else {
                this.openExport(tableid,filename)
            }
        };
        openExport(table, name) {
            if (!table.nodeType) {
                table = document.getElementById(table)
            }
            var ctx = {
                worksheet: name || 'Worksheet',
                table: table.innerHTML
            };
            var a = document.createElement("a");
            a.download = name;
            a.href = this.uri + this.base64(this.format(this.template, ctx));
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            // window.location.href = this.uri + this.base64(this.format(this.template, ctx));
        };
        base64(s) {
            return window.btoa(unescape(encodeURIComponent(s)))
        };
        format(s, c) {
            return s.replace(/{(\w+)}/g, function (m, p) {
                return c[p];
            });
        };
    }
//    var exportExcel = new ExportExcel();

