var array = [], WPTB_Table = function (columns, rows) {

    /* The members of the class */
    var settings = document.getElementsByClassName('wptb-settings-items'),
            wptbTableSetup = document.getElementsByClassName("wptb-table-setup")[0],
            table, row, cell,
            maxAmountOfCells,
            maxAmountOfRows;

    //HERE ARE THE PRIVATE FUNCTIONS
    /*
     * This function toggles buttons visibility in cell edit mode
     * (according to the amount of currently selected cells), and
     * highlights visually the clicked cell if it is not highlighted, or
     * removes highlight if clicked cell is already highlighted. 
     * It too toggles the bits of our abstract representation.
     * @param Event this is the event instance of the click performed over a cell.
     */
    var mark = function (event) {
        var rs = this.rowSpan,
                cs = this.colSpan,
                markedCells,
                noCells = document.getElementsByClassName('no-cell-action'),
                singleCells = document.getElementsByClassName('single-action'),
                multipleCells = document.getElementsByClassName('multiple-select-action'),
                position = getCoords(this),
                row = position[0],
                column = position[1];
        if (!document.select.isActivated()) {
            return;
        }
        if (this.className.match(/wptb-highlighted/)) {
            this.classList.remove('wptb-highlighted');
            for (var i = 0; i < rs; i++) {
                for (var j = 0; j < cs; j++) {
                    array[row + i][column + j] = 0;
                }
            }
        } else {
            this.classList.add('wptb-highlighted');
            for (var i = 0; i < rs; i++) {
                for (var j = 0; j < cs; j++) {
                    array[row + i][column + j] = 1;
                }
            }
        }

        markedCells = document.getElementsByClassName('wptb-highlighted').length;
        if (markedCells === 0) {
            for (var i = 0; i < multipleCells.length; i++) {
                multipleCells[i].classList.remove('visible');
                multipleCells[i].setAttribute('disabled', 'disabled');
            }
            for (var i = 0; i < noCells.length; i++) {
                noCells[i].classList.add('visible');
                noCells[i].removeAttribute('disabled');
            }
            for (var i = 0; i < singleCells.length; i++) {
                singleCells[i].classList.remove('visible');
                singleCells[i].setAttribute('disabled', 'disabled');
            }
        } else if (markedCells === 1) {
            for (var i = 0; i < multipleCells.length; i++) {
                multipleCells[i].classList.remove('visible');
                multipleCells[i].setAttribute('disabled', 'disabled');
            }
            for (var i = 0; i < noCells.length; i++) {
                noCells[i].classList.remove('visible');
                noCells[i].setAttribute('disabled', 'disabled');
            }
            for (var i = 0; i < singleCells.length; i++) {
                singleCells[i].classList.add('visible');
                singleCells[i].removeAttribute('disabled');
            }
        } else {
            for (var i = 0; i < multipleCells.length; i++) {
                if (table.isSquare(array)) {
                    multipleCells[i].classList.add('visible');
                    multipleCells[i].removeAttribute('disabled');
                } else {
                    multipleCells[i].classList.remove('visible');
                    multipleCells[i].setAttribute('disabled', 'disabled');
                }
            }
            for (var i = 0; i < noCells.length; i++) {
                noCells[i].classList.remove('visible');
                noCells[i].setAttribute('disabled', 'disabled');
            }
            for (var i = 0; i < singleCells.length; i++) {
                singleCells[i].classList.remove('visible');
                singleCells[i].setAttribute('disabled', 'disabled');
            }
        }
    };

    /* 
     * This function fills an array with 1's according to the actual design
     * of HTML table.
     * @returns an array of arrays containing an abstract representation
     * of HTML table.
     * @deprecated
     * */

    var realTimeArray = function () {
        var carried = [], tds, cols, matriz = [];

        for (var i = 0; i < maxAmountOfCells; i++) {
            carried[i] = 0;
        }

        for (var i = 0; i < table.rows.length; i++) {
            cols = [];

            var tds = table.rows[i].getElementsByTagName('td');

            for (items = 0; items < tds.length; items++) {

                for (var k = 0; k < tds[items].colSpan; k++) {
                    cols.push(1);
                }

                if (tds[items].rowSpan > 1) {
                    for (var k = 0; k < tds[items].colSpan; k++) {
                        carried[items + k] = {
                            justAssigned: true,
                            amount: tds[items].rowSpan
                        };
                    }
                }
            }

            for (var k = 0; k < maxAmountOfCells; k++) {
                if (typeof carried[k] == 'object' && carried[k].amount > 0) {
                    carried[k].amount--;
                    if (carried[k].justAssigned) {
                        carried[k].justAssigned = false;
                    } else {
                        cols.push(1);
                    }
                }
            }

            matriz.push(cols);

        }
        return matriz;
    };

    /*
     * This function gets the number and position of cell spaces in current row that are occuped 
     * by upper rowspanned cells.
     * @param number the number of row where we wish to calculate the carried rowspans up to.
     * @return an array with the remaining rowspans in each column.
     */
    var carriedRowspans = function (row) {
        var carried = [], tds, cols;

        for (var i = 0; i < maxAmountOfCells; i++) {
            carried[i] = 0;
        }

        if (row == -1) {
            return carried;
        }

        for (var i = 0; i <= row; i++) {
            cellsBuffer = table.rows[i].getElementsByTagName('td');
            cellPointer = 0;

            for (var xPosition = 0; xPosition < maxAmountOfCells; xPosition += stepsToMove) {
                stepsToMove = 1;

                if (carried[xPosition]) {
                    carried[xPosition]--;
                } else {
                    celda = cellsBuffer[cellPointer++];
                    if (celda.rowSpan > 1) {
                        for (k = 0; k < celda.colSpan; k++) {
                            carried[xPosition + k] = celda.rowSpan - 1;
                        }
                        stepsToMove = celda.colSpan;
                    } else if (celda.colSpan > 1) {
                        stepsToMove = celda.colSpan;
                    }
                }
            }

        }
        return carried;
    };

    /*
     * A helpful function for showing
     * the abstract table in console.
     * @param Array our abstract table.
     */
    var drawTable = function (a) {
        var string = 'DRAWING TABLE:\n';
        for (var i = 0; i < a.length; i++) {

            for (var j = 0; j < a[i].length; j++) {
                string += ' ' + a[i][j];
            }
            string += '\n';
        }
        table.isSquare(a);
    };

    /*
     * It resets all the bits of our abstract representation
     * to 0 and removes the highlighting class of all cells.
     */

    var undoSelect = function () {
        var noCells = document.getElementsByClassName('no-cell-action'),
                singleCells = document.getElementsByClassName('single-action'),
                multipleCells = document.getElementsByClassName('multiple-select-action'),
                tds = table.getElementsByClassName('wptb-highlighted');
        while (tds.length) {
            tds[0].classList.remove('wptb-highlighted');
        }
        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < array[i].length; j++) {
                array[i][j] = 0;
            }
        }
        for (var i = 0; i < multipleCells.length; i++) {
            multipleCells[i].classList.remove('visible');
        }
        for (var i = 0; i < noCells.length; i++) {
            noCells[i].classList.add('visible');
        }
        for (var i = 0; i < singleCells.length; i++) {
            singleCells[i].classList.remove('visible');
        }
    };

    /*
     * This fills the abstract representation of our table with 
     * zeros, at the start. the max amount of cells is the greatest sum
     * of all colspans for row.
     */

    var fillTableArray = function () {
        var colspansSums = [], a = [];

        //calculate max amount of cells inside a row
        for (var i = 0; i < table.rows.length; i++) {
            var cells = table.rows[i].getElementsByTagName('td'),
                    colspanSumInRow = 0;
            for (var j = 0; j < cells.length; j++) {
                colspanSumInRow += cells[j].colSpan;
            }
            colspansSums.push(colspanSumInRow);
        }

        maxAmountOfCells = Math.max.apply(null, colspansSums);
        //calculate max rows
        var maxAmountOfRows = table.rows.length;

        // fill with zeros from both values
        for (var i = 0; i < maxAmountOfRows; i++) {
            a[i] = [];
            for (var j = 0; j < maxAmountOfCells; j++) {
                a[i].push(0);
            }
        }
        drawTable(a);
        return a;
    };

    /*
     * This function gets the sum of all colspans in a row.
     * @param number the number of row to be used as reference.
     */
    var getActualPointsInRow = function (row) {
        var tds = table.rows[row].getElementsByTagName('td'),
                points = 0;
        for (var i = 0; i < tds.length; i++) {
            points += tds[i].colSpan;
        }
        return points;
    }

    /*
     * This function gets us the exact coordinates of
     * an exact cell, in a more reliable way than xIndex and yIndex,
     * these last ones were meant to be used for getting the cell trough them.
     * @param DOMElement the cell to get the coordinates.
     */
    var getCoords = function (search) {
        var skipInCols = [], cell;

        for (var i = 0; i < maxAmountOfCells; i++) {
            skipInCols[i] = 0;
        }

        for (var i = 0; i < table.rows.length; i++) {
            var cellsBuffer = table.rows[i].getElementsByTagName('td');
            cellPointer = 0;
            for (var xPosition = 0; xPosition < maxAmountOfCells; xPosition += stepsToMove) {
                stepsToMove = 1;

                if (skipInCols[xPosition]) {
                    skipInCols[xPosition]--;
                } else {
                    var td = cellsBuffer[cellPointer++];
                    if (td == search) {
                        return [i, xPosition];
                    }
                    if (td.rowSpan > 1) {
                        for (k = 0; k < td.colSpan; k++) {
                            skipInCols[xPosition + k] = td.rowSpan - 1;
                        }
                        stepsToMove = td.colSpan;
                    } else if (td.colSpan > 1) {
                        stepsToMove = td.colSpan;
                    }
                }
            }
        }
    };

    jQuery('#wptb-table-header-bg').val('');
    jQuery('#wptb-even-row-bg').val('');
    jQuery('#wptb-odd-row-bg').val('');
    jQuery('#wptb-table-border-color').val('');
    jQuery('#wptb-table-inner-border-number,#wptb-table-inner-border-slider').val('0');
    jQuery('#wptb-table-border-number,#wptb-table-border-slider').val('0');
    jQuery('#wptb-table-padding-number,#wptb-table-padding-slider').val('15');

    if (columns || rows) {
        //END OF PRIVATE FUNCTIONS
        for (var i = 0; i < settings.length; i++) {
            if (settings[i].id !== 'wptb-apply-inner-border') {
                settings[i].classList.add('visible');
            }
        }

        //Create a HTML Table element.
        table = document.createElement('table');
        table.classList.add('wptb-preview-table');

        //Add the header row.
        row = table.insertRow(-1);
        row.classList.add('wptb-table-head', 'wptb-row');

        for (var i = 0; i < columns; i++) {
            cell = new WPTB_Cell(mark);
            cell.setCoords(0, i);
            row.appendChild(cell.getDOMElement());
        }

        //Add the data rows.
        for (var i = 1; i < rows; i++) {

            row = table.insertRow(-1);
            row.classList.add('wptb-row');

            for (var j = 0; j < columns; j++) {
                cell = new WPTB_Cell(mark);
                cell.setCoords(i, j);
                row.appendChild(cell.getDOMElement());
            }
        }
    } else {
        let wptb_preview_table = document.getElementsByClassName('wptb-preview-table');

        if (wptb_preview_table.length > 0) {
            table = wptb_preview_table[0];

            let cells = table.getElementsByTagName('td');

            if (cells.length > 0) {
                for (let i = 0; i < cells.length; i++) {
                    WPTB_Cell(mark, cells[i]);
                }
            }
        }
    }

    /*
     * This just toggles visibility of cell edit bar, and toggles 
     * cell selecting mode.
     */

    table.toggleTableEditMode = function () {
        let bar = document.getElementsByClassName('edit-bar'),
                cellModeBackground = document.getElementById('cell_mode_background'),
                leftScrollPanelCurtain = document.getElementById('wptb-left-scroll-panel-curtain'),
                wptbPreviewTable = document.getElementsByClassName('wptb-preview-table');
        if (wptbPreviewTable.length > 0) {
            wptbPreviewTable = wptbPreviewTable[0];
        }

        if (bar.length > 0) {
            for (let i = 0; i < bar.length; i++) {
                if (bar[i].classList.contains('visible')) {
                    document.select.deactivateMultipleSelectMode();
                    bar[i].classList.remove('visible');
                    cellModeBackground.classList.remove('visible');
                    leftScrollPanelCurtain.classList.remove('visible');
                    wptbPreviewTable.classList.remove('wptb-preview-table-manage-cells');
                    let wptbPreviewTableTds = wptbPreviewTable.getElementsByTagName('td');
                    if (wptbPreviewTableTds.length > 0) {
                        for (let i = 0; i < wptbPreviewTableTds.length; i++) {
                            wptbPreviewTableTds[i].classList.remove('wptb-highlighted');
                        }
                    }
                } else {
                    document.select.activateMultipleSelectMode();
                    bar[i].classList.add('visible');
                    cellModeBackground.classList.add('visible');
                    leftScrollPanelCurtain.classList.add('visible');
                    wptbPreviewTable.classList.add('wptb-preview-table-manage-cells');
                }
            }

        }
    }

    /*
     * For assigning to each cell xIndex and y Index attributes,
     * these are the column number and row number of cell in table. 
     */

    table.recalculateIndexes = function () {
        let trs = this.getElementsByTagName('tr'), tds, maxCols = 0,
                tdsArr = [];

        for (var i = 0; i < trs.length; i++) {
            if (i == 0) {
                trs[i].style.backgroundColor = jQuery('#wptb-table-header-bg').val();
            } else {
                if (i % 2 == 0) {
                    trs[i].style.backgroundColor = jQuery('#wptb-odd-row-bg').val();
                } else {
                    trs[i].style.backgroundColor = jQuery('#wptb-even-row-bg').val();
                }
            }

            tdsArr[i];
            tds = trs[i].getElementsByTagName('td');

            if (tdsArr[i] == undefined) {
                tdsArr[i] = [];
            }

            let jMainIter = 0;
            for (var j = 0; j < tds.length; j++) {
                if (tdsArr[i][j] != undefined) {
                    for (let y = 0; y < 100; y++) {
                        if (tdsArr[i][jMainIter] != undefined) {
                            jMainIter++;
                            continue;
                        }
                        tdsArr[i][jMainIter] = tds[j];
                        tds[j].dataset.xIndex = jMainIter;
                        break;
                    }
                } else {
                    tdsArr[i][j] = tds[j];
                    tds[j].dataset.xIndex = jMainIter;
                }
                tds[j].dataset.yIndex = i;

                if (tds[j].colSpan > 1) {
                    for (let k = 1; k < tds[j].colSpan; k++) {
                        jMainIter++;
                        tdsArr[i][jMainIter] = 'tdDummy';
                    }
                }

                if (tds[j].rowSpan > 1) {
                    for (let x = 1; x < tds[j].rowSpan; x++) {
                        if (tdsArr[i + x] == undefined) {
                            tdsArr[i + x] = [];
                        }
                        for (let z = 0; z < tds[j].colSpan; z++) {
                            tdsArr[i + x][jMainIter - tds[j].colSpan + 1 + z ] = 'tdDummy';
                        }
                    }
                }
                jMainIter++;
            }
            if (j > maxCols) {
                maxCols = j;
            }
        }
        this.columns = maxCols;
    }

    /*
     * As simple as it is: adds a column to the end of table.
     */
    table.addColumnEnd = function () {
        let td,
                currentTable = document.getElementsByClassName('wptb-preview-table'),
                currentTableTd,
                currentTdStyle;
        if (currentTable.length > 0) {
            currentTableTd = currentTable[0].querySelector('td');
        }

        if (currentTableTd) {
            currentTdStyle = currentTableTd.getAttribute('style');
        }
        for (var i = 0; i < table.rows.length; i++) {
            td = new WPTB_Cell(mark);
            if (currentTdStyle) {
                td.getDOMElement().setAttribute('style', currentTdStyle);
            }
            table.rows[i].appendChild(td.getDOMElement());
            array[i].push(0);
        }
        maxAmountOfCells++;
        table.recalculateIndexes();
        undoSelect();
    };

    /*
     * As simple as it looks: adds a column to the start of table.
     */

    table.addColumnStart = function () {
        let td,
                firstCell,
                currentTable = document.getElementsByClassName('wptb-preview-table'),
                currentTableTd,
                currentTdStyle;
        if (currentTable.length > 0) {
            currentTableTd = currentTable[0].querySelector('td');
        }

        if (currentTableTd) {
            currentTdStyle = currentTableTd.getAttribute('style');
        }
        for (var i = 0; i < table.rows.length; i++) {
            td = new WPTB_Cell(mark);
            if (currentTdStyle) {
                td.getDOMElement().setAttribute('style', currentTdStyle);
            }
            firstCell = table.rows[i].getElementsByTagName('td')[0];
            if (firstCell) {
                table.rows[i].insertBefore(td.getDOMElement(), firstCell);
            } else {
                table.rows[i].appendChild(td.getDOMElement());
            }
            array[i].push(0);
        }

        maxAmountOfCells++;
        table.recalculateIndexes();
        undoSelect();
    };

    /*
     * Well, not so simple as previous functions.
     * It adds a column after a certain column of reference.
     * @param integer the column number to be used as reference.
     *	If empty, then the first highlighted cell is used as reference.
     */

    table.addColumnAfter = function (c_pos) {
        let rows = table.rows,
                cellPointer,
                cellsBuffer,
                cell = document.querySelector('.wptb-highlighted'),
                cellStyle = cell.getAttribute('style'),
                pos = c_pos != undefined && typeof c_pos === 'number' ? c_pos : getCoords(cell)[1],
                pendingInsertion = false,
                stepsToMove,
                td, bro,
                carriedRowspans = [],
                currentCell;

        for (var i = 0; i < maxAmountOfCells; i++) {
            carriedRowspans.push(0);
        }

        for (var i = 0; i < rows.length; i++) {
            cellPointer = 0;
            cellsBuffer = rows[i].getElementsByTagName('td');
            pendingInsertion = false;
            for (var xPosition = 0;
                    xPosition < maxAmountOfCells;
                    xPosition += stepsToMove) {
                stepsToMove = 1;

                if (pendingInsertion) {
                    td = new WPTB_Cell(mark);
                    if (cellStyle) {
                        td.getDOMElement().setAttribute('style', cellStyle);
                    }
                    if (currentCell && rows[i].contains(currentCell)) {
                        bro = currentCell.nextSibling;
                        if (bro) {
                            rows[i].insertBefore(td.getDOMElement(), bro);
                        } else {
                            rows[i].appendChild(td.getDOMElement());
                        }
                    } else {
                        rows[i].insertBefore(td.getDOMElement(), cellsBuffer[0]);
                    }
                    break;
                } else if (carriedRowspans[xPosition] > 0) {
                    // If no pending insertion, let's check if no rowspan from upper cells is pending in current position
                    if (pos == xPosition) {
                        pendingInsertion = true;
                    }
                } else {
                    currentCell = cellsBuffer[cellPointer++];
                    if (currentCell.rowSpan > 1) {
                        stepsToMove = currentCell.colSpan;
                        for (var k = 0; k < currentCell.colSpan; k++) {
                            carriedRowspans[xPosition + k] = currentCell.rowSpan;
                            if (xPosition + k == pos) {
                                pendingInsertion = true;
                            }
                        }
                    } else if (currentCell.colSpan > 1) {
                        stepsToMove = currentCell.colSpan;
                        for (var k = 0; k < currentCell.colSpan; k++) {
                            if (xPosition + k == pos) {
                                pendingInsertion = true;
                            }
                        }
                    } else if (xPosition == pos) {
                        pendingInsertion = true;
                    }
                }
            }

            for (var l = 0; l < maxAmountOfCells; l++) {
                if (carriedRowspans[l] > 0)
                    carriedRowspans[l]--;
            }

        }

        for (var i = 0; i < array.length; i++) {
            array[i].push(0);
        }
        maxAmountOfCells++;
        drawTable(array);
        table.recalculateIndexes();
        undoSelect();
    };

    /*
     * For preventing us to take a lot of time,
     * This is just calling the function addColumnAfter, but
     * using the previous column to current one as reference.
     * @see addColumnAfter
     */

    table.addColumnBefore = function () {
        var cell = document.querySelector('.wptb-highlighted'),
                pos = getCoords(cell)[1];

        if (pos === 0) {
            table.addColumnStart();
        } else {
            table.addColumnAfter(pos - 1);
        }
    };

    /*
     * Luckily, thisfunction is simple, 
     * it just add a row to the end of table.
     */

    table.addRowToTheEnd = function () {
        let r = table.insertRow(-1),
                td,
                aux,
                currentTable = document.getElementsByClassName('wptb-preview-table'),
                currentTableTd,
                currentTdStyle;
        if (currentTable.length > 0) {
            currentTableTd = currentTable[0].querySelector('td');
        }

        if (currentTableTd) {
            currentTdStyle = currentTableTd.getAttribute('style');
        }

        for (var i = 0; i < maxAmountOfCells; i++) {
            td = new WPTB_Cell(mark);
            if (currentTdStyle) {
                td.getDOMElement().setAttribute('style', currentTdStyle);
            }
            r.appendChild(td.getDOMElement());
        }
        aux = Array.from(array[0]);
        array.push(aux);
        drawTable(array);
        table.recalculateIndexes();
        undoSelect();
    };

    /*
     * Yet another simple function, 
     * it just add a row to the start of table.
     */

    table.addRowToTheStart = function () {
        let r = table.insertRow(0),
                td,
                aux,
                currentTable = document.getElementsByClassName('wptb-preview-table'),
                currentTableTd,
                currentTdStyle;
        if (currentTable.length > 0) {
            currentTableTd = currentTable[0].querySelector('td');
        }

        if (currentTableTd) {
            currentTdStyle = currentTableTd.getAttribute('style');
        }

        for (var i = 0; i < maxAmountOfCells; i++) {
            td = new WPTB_Cell(mark);
            if (currentTdStyle) {
                td.getDOMElement().setAttribute('style', currentTdStyle);
            }
            r.appendChild(td.getDOMElement());
        }
        aux = Array.from(array[0]);
        array.push(aux);
        drawTable(array);
        table.recalculateIndexes();
        undoSelect();
    };

    /* 
     * This function adds a row before the current one.
     * Since the biggest factor of problem is a not-started but ongoing rowspan,
     * the most of the troubles is not here.
     */

    table.addRowBefore = function () {
        var cell = document.querySelector('.wptb-highlighted'),
                cellStyle = cell.getAttribute('style'),
                row = getCoords(cell)[0],
                r = table.insertRow(row),
                aux,
                rowspans = carriedRowspans(row - 1);

        noPending = rowspans.filter(function (elem) {
            return elem == 0;
        });

        for (var i = 0; i < noPending.length; i++) {
            let td = new WPTB_Cell(mark);
            if (cellStyle) {
                td.getDOMElement().setAttribute('style', cellStyle);
            }
            r.appendChild(td.getDOMElement());
        }

        arr = realTimeArray();

        for (var i = 0; i < arr.length; i++) {

            if (arr[i].length > maxAmountOfCells) {
                //Still not watched
            }

            if (arr[i].length < maxAmountOfCells) {

                for (var j = arr[i].length; j < maxAmountOfCells; j++) {
                    td = new WPTB_Cell(mark);
                    table.rows[i].appendChild(td.getDOMElement());
                }
            }
        }

        aux = Array.from(array[0]);
        array.push(aux);
        drawTable(array);
        table.recalculateIndexes();
        undoSelect();
    };

    /*
     * Well... by the name convention of the previous 3 functions,
     * it's pretty obvious that this functions attaches a new
     * row after highlighted cell row. The greatest obstacle it was
     * the possibility of a TR not having the exact amount of columns
     * occuped by actual node but rowspanned upper cells. For that purpose
     * it was created the function realTimeArray.
     * @see realTimeArray
     */

    table.addRowAfter = function () {

        var cell = document.querySelector('.wptb-highlighted'),
                cellStyle = cell.getAttribute('style'),
                row = getCoords(cell)[0],
                r = table.insertRow(row + 1),
                aux,
                rowspans = carriedRowspans(row);

        noPending = rowspans.filter(function (elem) {
            return elem == 0;
        });

        for (var i = 0; i < noPending.length; i++) {
            let td = new WPTB_Cell(mark);
            if (cellStyle) {
                td.getDOMElement().setAttribute('style', cellStyle);
            }
            r.appendChild(td.getDOMElement());
        }

        arr = realTimeArray();

        for (var i = 0; i < arr.length; i++) {

            if (arr[i].length > maxAmountOfCells) {
                //Still not watched
            }

            if (arr[i].length < maxAmountOfCells) {

                for (var j = arr[i].length; j < maxAmountOfCells; j++) {
                    td = new WPTB_Cell(mark);
                    table.rows[i].appendChild(td.getDOMElement());
                }
            }
        }

        aux = Array.from(array[0]);
        array.push(aux);
        drawTable(array);
        table.recalculateIndexes();
        undoSelect();
    };

    /*
     * This function checks the current selected cells
     * make a rectangular shape.
     * @param Array the abstract table.
     * @return false, if not making a rectangle, or
     *	Array an array containing number of rows and columns, if selection makes a rectangle.
     */

    table.isSquare = function (a) {
        var rowStart = -1,
                columnStart = -1,
                rowEnd = -1,
                columnEnd = -1,
                height,
                width,
                itemsEstimate = 0,
                items = 0;

        for (var i = 0; i < a.length; i++) {
            for (var j = 0; j < a[i].length; j++) {
                if (a[i][j] == 1) {
                    rowStart = i;
                    columnStart = j;
                    break;
                }
            }
            if (rowStart !== -1 && columnStart !== -1) {
                break;
            }
        }

        for (var i = a.length - 1; i > -1; i--) {
            for (var j = a[i].length - 1; j > -1; j--) {
                if (a[i][j] == 1) {
                    rowEnd = i;
                    columnEnd = j;
                    break;
                }
            }
            if (rowEnd !== -1 && columnEnd !== -1) {
                break;
            }
        }

        for (var i = rowStart; i < rowEnd; i++) {
            for (var j = columnStart; j < columnEnd; j++) {
                if (a[i][j] == 0 || a[i][j] == undefined) {
                    return false;
                }
            }
        }

        for (var i = 0; i < a.length; i++) {
            for (var j = 0; j < a[i].length; j++) {
                if (a[i][j] == 1) {
                    items++;
                }
            }
        }

        height = rowEnd - rowStart + 1;
        width = columnEnd - columnStart + 1;
        itemsEstimate = height * width;

        if (itemsEstimate !== items) {
            return false;
        }
        return [height, width];
    };

    /*
     * This function merges all selected cells.
     * Well, actually sets the colspan and rowspan of first 
     * upper left  cell in selection and deletes the another selected cells.
     */

    table.mergeCells = function () {
        var dimensions = table.isSquare(array),
                rowspan = dimensions[0],
                colspan = dimensions[1],
                first = document.querySelector('.wptb-highlighted'),
                tds = [].slice.call(document.getElementsByClassName('wptb-highlighted'), 1),
                tdsChildrenNew = [];

        for (let i = 0; i < tds.length; i++) {
            let tdsInternalElements = tds[i].getElementsByClassName('wptb-ph-element');
            if (tdsInternalElements.length > 0) {
                let tdsIntElemLength = tdsInternalElements.length;
                for (let j = 0; j < tdsIntElemLength; j++) {
                    tdsChildrenNew.push(tdsInternalElements[j]);
                }
            }
            let p = tds[i].parentNode;
            p.removeChild(tds[i]);
        }
        if (tdsChildrenNew.length > 0) {
            if (first.children.length == 0) {
                first.appendChild(new WPTB_Space());
            }
            for (let i = 0; i < tdsChildrenNew.length; i++) {
                first.appendChild(tdsChildrenNew[i]);
                first.appendChild(new WPTB_Space());
            }
        }

        first.colSpan = colspan;
        first.rowSpan = rowspan;
        table.recalculateIndexes();
        undoSelect();
    };

    /*
     * This functions makes the exact inverse as above.
     * It resets colspan and rowspan and appends 
     * the same amount in cells to the table.
     * @bug
     */

    table.splitCell = function () {
        var cell = document.getElementsByClassName('wptb-highlighted')[0],
            rowspan = cell.rowSpan,
            colspan = cell.colSpan,
            cellStyles = cell.getAttribute('style'),
            row = getCoords(cell)[0],
            thisRow = table.rows[row],
            xIndexNext,
            tdNumberBefore;
        cell.rowSpan = 1;
        cell.colSpan = 1;
        console.log(cell);
            
        if ( cell.nextSibling ) {
            xIndexNext = cell.nextSibling.dataset.xIndex;
        } else {
            xIndexNext = undefined;
        }
        
        for (let i = 1; i < colspan; i++) {
            let td = new WPTB_Cell(mark);
            td.getDOMElement().setAttribute('style', cellStyles);
            if ( cell.nextSibling ) {
                thisRow.insertBefore( td.getDOMElement(), cell.nextSibling );
            } else {
                thisRow.appendChild( td.getDOMElement() );
            }
            
        }

        if (rowspan > 1) {
            for (let i = 1; i < rowspan; i++) {
                let rowChildInsertBefore = undefined,
                    rowNext = table.rows[row + i],
                    rowChildren = rowNext.children,
                    rowChildrenLength = rowChildren.length;
                console.log(rowNext);
                if ( rowChildrenLength > 0 ) {
                    for ( let k = 0; k < rowChildrenLength; k++ ) {
                        console.log(rowChildren[k].dataset.xIndex);
                        if ( Number( rowChildren[k].dataset.xIndex ) >= Number( xIndexNext ) ) {
                            rowChildInsertBefore = rowChildren[k];
                            break;
                        } 
                    }
                }
                for ( let j = 0; j < colspan; j++ ) {
                    let td = new WPTB_Cell( mark );
                    td.getDOMElement().setAttribute( 'style', cellStyles );
                    if ( rowChildInsertBefore != undefined ) {
                        rowNext.insertBefore( td.getDOMElement(), rowChildInsertBefore );
                    } else {
                        rowNext.appendChild( td.getDOMElement() );
                    }
                }
            }
        }

        table.recalculateIndexes();
        undoSelect();
    };

    /*
     * Searches for rowspanned cells up to row number meeting it.
     * @param number the number of row where the function
     * must search up to.
     */

    table.findRowspannedCells = function (row) {
        var array = [],
                difference;
        actualPoints = getActualPointsInRow(row);
        if (actualPoints === maxAmountOfCells) {
            return [];
        }
        difference = maxAmountOfCells - actualPoints;

        for (var i = row - 1; i >= 0 && difference; i--) {
            var tds = table.rows[i].getElementsByTagName('td');
            for (var i = 0; i < tds.length; i++) {
                if (tds[i].rowSpan > 1) {
                    array.push(tds[i]);
                    difference -= tds[i].colSpan;
                }
            }
        }
        return array;

    }

    /*
     * This function explores the table and adds 
     * a cell for each lacking one for each row
     * to meet an even amount of cells.
     */

    table.addLackingCells = function () {
        var sumRows = [];
        for (var i = 0; i < table.rows.length; i++) {
            sumRows.push(0);
        }

        for (var i = 0; i < table.rows.length; i++) {
            var tds = table.rows[i].getElementsByTagName('td');
            for (var j = 0; j < tds.length; j++) {
                if (tds[j].rowSpan > 1) {
                    for (var k = 1; k < tds[j].rowSpan; k++) {
                        sumRows[i + k]++;
                    }
                }
            }
        }

        for (var i = 0; i < table.rows.length; i++) {
            var tds = table.rows[i].getElementsByTagName('td'),
                    totalColspan = 0;
            for (var j = 0; j < tds.length; j++) {
                totalColspan += tds[j].colSpan;
            }
            totalColspan += sumRows[i];
            difference = maxAmountOfCells - totalColspan;
            for (var j = 0; j < difference; j++) {
                var td = new WPTB_Cell(mark);
                table.rows[i].appendChild(td.getDOMElement());
                //table.rows[i].insertBefore( td.getDOMElement(), rows[i].nextSibling );
            }
        }
    };

    /*
     * This function deletes the row of currently
     * selected cell. 
     */

    table.deleteRow = function () {
        let cell = document.querySelector('.wptb-highlighted'),
                cellStyles = cell.getAttribute('style'),
                row = getCoords(cell)[0],
                thisRow = table.rows[row],
                rowspan = cell.rowSpan,
                colspan = cell.colSpan,
                tdNumberBefore = [];

        let thisRowChildren = thisRow.children;
        for (let i = 0; i < thisRowChildren.length; i++) {

                if ( thisRowChildren[i].rowSpan > 1 ) {
                
                    for ( let j = 1; j < thisRowChildren[i].rowSpan; j++ ) {
                        let nextRow = table.rows[row + j],
                                nextRowChildren = nextRow.children,
                                nextRowChildrenLength = nextRowChildren.length,
                                tdArr = [];
                        
                        for ( let k = 0; k < nextRowChildrenLength; k++ ) {
                            if ( thisRowChildren.length - 1 != i && nextRowChildren[k].dataset.xIndex >= thisRowChildren[i + 1].dataset.xIndex ) {
                                for ( let z = 0; z < thisRowChildren[i].colSpan; z++ ) {
                                    let td = new WPTB_Cell(mark);
                                    td.getDOMElement().setAttribute('style', cellStyles);
                                    tdArr.push([td, nextRowChildren[k]]);
                                }
                                break;
                            } else if ( thisRowChildren.length - 1 == i ) {
                                for ( let z = 0; z < thisRowChildren[i].colSpan; z++ ) {
                                    let td = new WPTB_Cell(mark);
                                    td.getDOMElement().setAttribute('style', cellStyles);
                                    tdArr.push([td]);
                                }
                                break;
                            }
                        }
                        
                        if (tdArr.length > 0) {
                            for (let k = 0; k < tdArr.length; k++) {
                                if ( tdArr[k][1] != undefined ) {
                                    nextRow.insertBefore( tdArr[k][0].getDOMElement(), tdArr[k][1] );
                                } else {
                                    nextRow.appendChild( tdArr[k][0].getDOMElement() );
                                }
                            }
                        }
                    }
                }
        }
        let tableRows = table.rows;
        if ( tableRows.length > 0 ) {
            for ( let j = 0; j < row; j++ ) {
                let jRowChildren = tableRows[j].children;
                if ( jRowChildren.length > 0 ) {
                    for ( let x = 0; x < jRowChildren.length; x++ ) {
                        if ( jRowChildren[x].rowSpan - 1 >= row - j ) {
                            jRowChildren[x].rowSpan--;
                        }
                    }
                }
            }
        }

        table.getElementsByTagName('tbody')[0].removeChild(table.rows[row]);
        table.recalculateIndexes();
        undoSelect();
    }

    /*
     * This function deletes the column of currently
     * selected cell. Again, this is way more complicated than
     * delete row case.
     */

    table.deleteColumn = function () {

        var cell_ref = document.querySelector('.wptb-highlighted'),
                column = getCoords(cell_ref)[1],
                buffer, cell,
                carriedRowspans = [];

        for (var i = 0; i < maxAmountOfCells; i++) {
            carriedRowspans.push(0);
        }

        for (var i = 0; i < table.rows.length; i++) {
            buffer = table.rows[i].getElementsByTagName('td');
            stepsToMove = 1;
            cellPointer = 0;
            for (var j = 0; j < maxAmountOfCells; j += stepsToMove) {

                stepsToMove = 1;

                if (carriedRowspans[j] == 0) {
                    cell = buffer[cellPointer++];
                    if (cell.rowSpan > 1) {
                        stepsToMove = cell.colSpan;
                        for (var k = 0; k < cell.colSpan; k++) {
                            carriedRowspans[j + k] = cell.rowSpan;
                        }
                        if (column > j && column <= j + k - 1) {
                            //cell.style.backgroundColor = 'pink';
                            cell.colSpan--;
                            break;
                        }
                    } else if (cell.colSpan > 1) {
                        stepsToMove = cell.colSpan;

                        if (column > j && column <= j + cell.colSpan - 1) {
                            //cell.style.backgroundColor = 'pink';
                            cell.colSpan--;
                            break;
                        }
                    }
                    {
                        if (column == j) {
                            table.rows[i].removeChild(cell);
                            //cell.style.backgroundColor = 'pink';
                            break;
                        }
                    }
                } else {
                    continue;
                }
            }

            for (var l = 0; l < carriedRowspans.length; l++) {
                if (carriedRowspans[l] > 0) {
                    carriedRowspans[l]--;
                }

            }
        }
        maxAmountOfCells--;

        for (var i = 0; i < table.rows.length; i++) {
            if (array[i] != undefined)
                array[i].pop();
        }
        undoSelect();
    };

    document.getElementsByClassName('wptb-table-generator')[0].style.display = 'none';

    array = fillTableArray();

    undoSelect();
    drawTable(array);

    wptbTableSetup.appendChild(table);
    if (columns || rows) {
        table.recalculateIndexes();
    }

    WPTB_LeftPanel();

};