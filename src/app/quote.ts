export class Quote {
  showDetails: boolean;
  upvotes: number
  downvotes: number
  score: number
  constructor(
    public quote: string,
    public author: string,
    public user: string,
    public date: Date
  ) {
    this.showDetails = false;
    this.upvotes = 0
    this.downvotes = 0
    this.score = 0
  }
}
