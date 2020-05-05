import React from 'react';

async function getData(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  const obj = await data.data;

  return obj;
}

export default getData;
