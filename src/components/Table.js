import React from "react";

const Table = ({ data }) => {

  return (
    <div>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>id</th>
            <th>Location</th>
            <th>Repositories</th>
            <th>View Profile</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {!data.avatar_url ? (
                " "
              ) : (
                <img
                  className="imagen"
                  src={data.avatar_url}
                  alt={data.avatar_url}
                />
              )}
            </td>
            <td>{data.name}</td>
            <td>{data.id}</td>
            <td>{data.location}</td>
            <td>{data.public_repos}</td>
            <td><a href={data.html_url} target="_blank">{data.login}</a></td>
           
          </tr>
        </tbody>
      </table>

    
    </div>
  );
};

export default Table;
