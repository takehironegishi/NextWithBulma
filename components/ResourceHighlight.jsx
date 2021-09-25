import Link from "next/link"

export const ResourceHighlight = ({ resources }) => (
	<section className="hero ">
		<div className="hero-body">
			<div className="container">
				{ resources.map(resource => (
					<section className="section" key={resource.id}>
						<div className="columns">
							<div className="column is-8 is-offset-2">
								<div className="content is-medium">
									<h2 className="subtitle is-4">{resource.createdAt}</h2>
									<h1 className="title">{resource.title}</h1>
									<p>{resource.description}</p>
									<Link href={`/resources/${resource.id}`}>
										<a className="button is-link">
											Details
										</a>
									</Link>
								</div>
							</div>
						</div>
					</section>
				)) }
			</div>
		</div>
	</section>
)