import { AfterRead, BeforeRead, Entities, Handler, Req } from "cds-routing-handlers";
import { CatalogService } from "../../../src/entities/catalog-entities";

@Handler(CatalogService.SanitizedEntity.Book)
export class BookHandler {

  @BeforeRead()
  public async checkAuth() {
    console.log("Checking Authentication");
  }

  @BeforeRead()
  public async doSomeOtherThings() {
  }

  @AfterRead()
  public async addDiscount(@Entities() book: CatalogService.IBook[], @Req() req: any): Promise<void> {
    console.log("Read books");

    const addDiscount = (book: CatalogService.IBook) => {
      if (book.stock > 111) book.title += ` -- 11% discount!`;
      return book;
    };

    const isIterable = (obj: any) => {
      // checks for null and undefined
      if (obj == null) {
        return false;
      }
      return typeof obj[Symbol.iterator] === "function";
    };

    if (isIterable(book)) {
      for (const each of book) {
        addDiscount(each);
      }
    }
  }
}