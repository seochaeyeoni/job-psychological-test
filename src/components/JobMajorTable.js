import React from 'react';

const JobMajorTable = ({ col, values }) => {
  const url = 'https://www.career.go.kr/cnet/front/base/job/jobView.do?SEQ='
  const row = values[0];
  const data = values[1];
  const column = () => {
    return (
      <tr>
        {col.map(elem => (
          <td>{elem}</td>
        ))}
      </tr>
    );
  };

  const bodyData = () => {
    return <tbody>
      {row.map((value, index) => (
        <tr>
          <th scope="row">{value}</th>
          <td>
          {data[index].map(elem => (
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            // eslint-disable-next-line react/jsx-no-target-blank
            <a href={url + elem[0]} target='_blank'>{elem[1]}</a>
          ))}
          </td>
        </tr>
      ))}
      </tbody>;
  };

  return (
    <table class="table table-bordered">
      <thead>{column()}</thead>
      {bodyData()}
    </table>
  );
};

export default JobMajorTable;
