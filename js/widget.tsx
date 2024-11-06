import * as React from "react";
import { createRender, useModelState } from "@anywidget/react";
import { TreeSelect } from 'antd';
import "./widget.css";

const treeData = [
	{
	  title: 'Node1',
	  value: '0-0',
	  children: [
		{
		  title: 'Child Node1',
		  value: '0-0-1',
		},
		{
		  title: 'Child Node2',
		  value: '0-0-2',
		},
	  ],
	},
	{
	  title: 'Node2',
	  value: '0-1',
	},
  ]; 

const onChange = (newValue : any) => {
	console.log(newValue);
	//setStrValue(newValue);
  };

const strValue = "Testing value";

const render = createRender(() => {
	const [value, setValue] = useModelState<number>("value");
	return (
		<div className="chiplandscape">
			<button onClick={() => setValue(value + 1)}>
				count is {value}
			</button>

			<TreeSelect
      style={{
        width: '100%',
      }}
      value={strValue}
      dropdownStyle={{
        maxHeight: 400,
        overflow: 'auto',
      }}
      treeData={treeData}
      placeholder="Please select"
      treeDefaultExpandAll
      onChange={onChange}
    />
		</div>
	);
});

export default { render };
