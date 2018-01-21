function setupNomogramControlVisibility() {
    d3.select(".nomogram-control-toggle")
        .on("click", function() {
            let open = d3.select(this).classed("open");

            d3.select(this).classed("open", !open);
            d3.select(".nomogram-controls").classed("open", !open);            
        })
}