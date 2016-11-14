@extends('layouts.app')

@section('htmlheader_title')
	Home
@endsection


@section('main-content')
	<router-view></router-view>
	<vue-progress-bar></vue-progress-bar>
	{{-- <div class="container spark-screen">
		<div class="row">
			<div class="col-md-10 col-md-offset-1">
				<div class="panel panel-default">
					<div class="panel-heading">Home</div>

					<div class="panel-body">
						{{ trans('adminlte_lang::message.logged') }}
					</div>
				</div>
			</div>
		</div>
	</div> --}}
@endsection
