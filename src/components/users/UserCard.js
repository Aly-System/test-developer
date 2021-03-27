import React from 'react';
import { Link } from 'react-router-dom';

export const UserCard = ({
    id,
    login,
    avatar_url	
})  => {

    return (
        <div className="card ms-3 animate__animated animate__fadeIn" style={ { maxWidth: 540 } }>
            <div className="row no-gutters">
                  <div className="col-md-8">
                    
                    <div className="card-body">
                        {
                            ( login !== "") 
                                && <p className="card-text">{ id }. { login } </p>
                        }

                        
                        <Link to={ `./user/${ login }` }>
                            Más...
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    )

}
