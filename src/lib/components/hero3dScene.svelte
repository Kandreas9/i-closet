<script>
	import ThrelteCanvas from './threlteCanvas.svelte';
	import { DirectionalLight, PerspectiveCamera } from '@threlte/core';
	import { GLTF } from '@threlte/extras';

	// import { onDestroy, onMount } from 'svelte';
	// import { BoxBufferGeometry, GridHelper, MeshStandardMaterial } from 'three';
	// import {
	// 	DirectionalLight,
	// 	Mesh,
	// 	OrbitControls,
	// 	PerspectiveCamera,
	// 	TransformControls,
	// 	useThrelte
	// } from '@threlte/core';
	//
	// let gridHelper;
	// let scene;
	// onMount(() => {
	// 	gridHelper = new GridHelper(10, 10);
	// 	const { scene: _scene } = useThrelte();
	// 	scene = _scene;
	//
	// 	scene?.add(gridHelper);
	// });
	//
	// onDestroy(() => {
	// 	scene?.remove(gridHelper);
	// });
</script>

<div class="h-full w-full">
	<ThrelteCanvas>
		<PerspectiveCamera position={{ z: 10 }} fov={20} />

		<DirectionalLight position={{ y: 10, z: 10 }} />

		<GLTF url="/models/suit/scene.gltf" />
	</ThrelteCanvas>
</div>
