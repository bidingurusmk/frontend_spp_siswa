<template>
	<div class="container">
		<h1>Daftar Bulan Belum Lunas</h1>
        <table class="table table-hover table-striped">
			<thead>
				<tr>
					<th>NO</th><th>Biaya</th><th>Bulan</th><th>Tahun</th><th>Status Bayar</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(tm, index) in datahistori" :key="tm.id">
					<td>{{index+1}}</td><td>{{tm.nominal}}</td><td>{{tm.bulan_spp}}</td><td>{{tm.tahun_spp}}</td><td>{{tm.status_lunas}}</td>
				</tr>
			</tbody>
		</table>
        <h4>Kurang Bayar : {{kurangbayar}}</h4>
	</div>
</template>
<script>

	export default{
		name:"Kurang_bayar",
		data(){
			return {
                datahistori:[],
                kurangbayar:0,
			}
		},
		methods:{
			gethistori : function(){
				var option = {
						headers:{Authorization: "bearer "+localStorage.getItem('token')}
					};
				this.axios.get("http://localhost:81/spp_app/public/api/getkurangbayar",option).then((result)=>{
					console.log(result)
					this.datahistori=result.data.daftarbelumbayar
                    this.kurangbayar=result.data.kurangbayar

				});
			}
		},
        mounted(){
			this.gethistori()
		}
	}
</script>