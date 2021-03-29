import React, { useState } from 'react';
import { Layout } from '../components';
import { gql, useQuery } from '@apollo/client';
import PersonCard from '../containers/person-card';
import QueryResult from '../components/query-result'
import ReactPaginate from "react-paginate";


const PEOPLE = gql`
 query ExampleQuery($pageNum: Int) {
  searchByPage(pageNum: $pageNum) {
    name
    birth_year
    height
    mass
    gender
    world {
      name
      diameter
      population
      climate
    }
  }
}
`

const People = () => {
  const [currentPage, setCurrentPage] = useState(0);


  const { loading, error, data, refetch } = useQuery(PEOPLE, {
    variables: {
      pageNum: currentPage
    }
  });

 
  const handlePageClick = ({ selected: selectedPage }) => {

    setCurrentPage(selectedPage);
    refetch({ 
      pageNum: currentPage 
    }); 
  }
  
  return (
  
      <Layout grid>
        <QueryResult error={error} loading={loading} data={data}>
          {data?.searchByPage?.map(person => (
            <PersonCard key={person.name} person={person} />
          ))}
        </QueryResult>
      
       <div style={{ flexBasis: "100%",height: 0, width:0}}> 

      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={9}
        pageRangeDisplayed = {9}
        onPageChange={handlePageClick} 
        containerClassName={"pagination"}
        previousLnkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />

      </div>

      </Layout>
      

  );
};

export default People;
