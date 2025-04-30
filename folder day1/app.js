const heading=React.createElement("div",{class:"parent"},
    [React.createElement("div",{class:"child1"},[React.createElement("h1",{class:"head11"},"child1 head11"),React.createElement("h2",{class:"head12"},"child1 head12")]),
    React.createElement("div",{class:"child2"},[React.createElement("h1",{class:"head21"},"child2 head21"),React.createElement("h2",{class:"head22"},"child2 head22")])]);

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)
