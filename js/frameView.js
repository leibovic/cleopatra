function FrameView() {
  this._container = document.createElement("div");
  this._container.className = "frameViewContainer";

  this._busyCover = document.createElement("div");
  this._busyCover.className = "busyCover";
  this._container.appendChild(this._busyCover);

  this._svg = this._createSvg();
  this._container.appendChild(this._svg);
}

FrameView.prototype = {
  getContainer: function SourceView_getContainer() {
    return this._container;
  },
  _createSvg: function SourceView__createSvg() {
    var svg = document.createElement("svg");
    svg.setAttribute("width", 300);
    svg.setAttribute("height", 100);
    svg.setAttribute("version", "2.0");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("view-box", "0 0 300 100");
    return svg;
  },
  dataIsOutdated: function HistogramView_dataIsOutdated() {
    this._busyCover.classList.add("busy");
  },
  display: function SourceView_display(histogramData, frameStart, widthSum, highlightedCallstack) {
    frameStart = [1, 16, 32, 100, 110, 115];
    var path = "m ";
    for (var i = 0; i < frameStart.length - 1; i++) {
      var start = frameStart[i];
      var end = frameStart[i+1];
      var time = end - start;
      path += (i * 10) + "," + (50 - time) + " "; 
    }
    var pathElem = document.createElement("path");
    pathElem.setAttribute("d", path);
    pathElem.setAttribute("stroke", "black");
    pathElem.setAttribute("stroke-width", "5");
    this._svg.appendChild(pathElem);

  },
};

