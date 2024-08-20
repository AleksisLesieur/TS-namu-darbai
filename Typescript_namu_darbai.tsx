import React from 'react';

// 4
interface helloProp {
  name: string;
}

const Hello: React.FC<helloProp> = ({ name }) => {
  return <div>Hello {name}</div>;
};

// 5
interface ItemListProp {
  items: string[];
}

const ItemList: React.FC<ItemListProp> = ({ items }) => {
  return (
    <div>
      {items.map((element, index) => (
        <div key={index}>{element}</div>
      ))}
    </div>
  );
};

// 6
interface UserProp {
  name: string;
  age: number;
}

const UserProfile: React.FC<UserProp> = (props) => {
  return (
    <div>
      <div>User name: {props.name}</div>
      <div>User name: {props.age}</div>
    </div>
  );
};

export { Hello, ItemList, UserProfile };
