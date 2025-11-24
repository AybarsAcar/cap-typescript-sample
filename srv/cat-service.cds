using my.bookshop as my from '../db/schema';

service CatalogService {
    @readonly
    entity Book  as
        projection on my.Book {
            *,
            author.name as author
        }
        excluding {
            createdBy,
            modifiedBy,
        };

    @readonly
    entity Genre as projection on my.Genre;

    @requires_: 'authenticated-user'
    action submitOrder(book: Book:ID, amount: Integer)
}
