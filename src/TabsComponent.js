import { useState } from "react";

const TabsComponent = ({ tabs }) => {
  //   const [selectedTab, setSelectedTab] = useState(tabs[0].id);
  const [selectedTab, setSelectedTab] = useState([tabs[0].id]);

  console.log("se", selectedTab);
  return (
    <div>
      <h2>TABS COMPONENT</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "4px 8px",
        }}
      >
        {tabs.length
          ? tabs.map((tab, index) => (
              <div key={tab.id}>
                <div
                  style={{
                    padding: "8px",
                    borderRight: "2px solid red",
                    cursor: "pointer",
                    margin: "2px",
                  }}
                  onClick={() =>
                    setSelectedTab((prev) =>
                      prev.includes(tab.id)
                        ? prev.filter((i) => i !== tab.id)
                        : [...prev, tab.id]
                    )
                  }
                >
                  {tab.title}
                </div>
              </div>
            ))
          : null}
      </div>
      {tabs.map((tab) =>
        selectedTab.includes(tab.id) ? (
          <div
            style={{
              margin: "12px 4px",
              padding: "8px",
              border: "1px solid black",
            }}
          >
            {tab.content}
          </div>
        ) : null
      )}
    </div>
  );
};

export default TabsComponent;
