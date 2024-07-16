
        // const heading = 
        const root = ReactDOM.createRoot(document.getElementById("root"))


       const headings = React.createElement("div",{id:"Main"}, 
        React.createElement("div",{id:"first"}, 
            React.createElement("div",{id:"secong"}),
           [ React.createElement('h1',{id:"apple"},"Hello Baby"),
            React.createElement("h2",{id:"first"},"This is from javascript ")] 
        ),
        React.createElement("div",{id:"firstss"}, 
            React.createElement("div",{id:"secongss"}),
           [ React.createElement('h1',{id:"apples"},"Hello Baby its not that"),
            React.createElement("h2",{id:"first"},"This is from javascript ohh yeah!... ")]
        ),
        
    )

        const roots = ReactDOM.createRoot(document.getElementById("roots"))
   
        // root.render(heading)

        root.render(headings)

       