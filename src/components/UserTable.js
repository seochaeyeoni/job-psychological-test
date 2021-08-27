import React from 'react';

const UserTable = ({ userValue }) => {
  return (
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">이름</th>
          <th scope="col">성별</th>
          <th scope="col">검사일</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{userValue.name}</td>
          <td>{userValue.gender}</td>
          <td>{userValue.createdAt}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default UserTable;
